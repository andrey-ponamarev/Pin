import { instagram } from 'instagram-node';
import Bluebird from 'bluebird';
import { api as apiConfig } from '../../../config';
import { Router } from 'express';

const instagramRouter = Router({mergeParams: true});
const api = instagram();
const {
    redirect_uri,
    client_id,
    client_secret
    } = apiConfig.instagram;

Bluebird.promisifyAll(api);

api.use({client_id, client_secret});


const authorize_user = (req, res) => {
    res.redirect(api.get_authorization_url(redirect_uri, {
        scope: ['likes', 'public_content', 'follower_list', 'relationships', 'comments', 'basic'],
        state: 'a state'
    }));
};

const handleauth = (req, res) => {
    api.authorize_user(req.query.code, redirect_uri, function (err, result) {
        if (err) {
            res.send(`Didn't work`);
        } else {
            res.cookie(`instaToken`, result.access_token, {maxAge: 9000000, httpOnly: true});
            res.redirect('/');
        }
    });
};

const user_self_media_recent = (req, res) => {
    api.use({access_token: req.cookies.instaToken});

    return api.user_self_media_recentAsync({count: 20})
        .then((medias, pagination, remaining, limit) => {
            console.log('err', medias, pagination, remaining, limit);
            res.json(medias);
        });
};

const user_self_liked = (req, res) => {
    console.log(req.cookies);
    api.use({access_token: req.cookies.instaToken || '1338234654.4452438.aa84477c7c2e4022a1dc03196053e3f9'});

    return api.user_self_likedAsync({count: 20})
        .then((medias, pagination, remaining, limit) => {
            //console.log('err', medias, pagination, remaining, limit);

            res.json(filterPhotos(medias));
        });
};

instagramRouter
    .get('/authorize_user', authorize_user)
    .get('/handleauth', handleauth)
    .get('/user_self_liked', user_self_liked)
    .get('/user_self_media_recent', user_self_media_recent);

export default instagramRouter;

function filterPhotos(medias) {
    console.log(medias.length);

    return medias
        .filter(media => (media.location && media.type === 'image'))
        .reduce((state, media) => {
            const { location, images } = media;

            state.push({
                location,
                src: images.standard_resolution.url
            });

            return state;
        }, []);
}