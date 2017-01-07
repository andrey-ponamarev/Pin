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

instagramRouter
    .get('/authorize_user', authorize_user)
    .get('/handleauth', handleauth)
    .get('/user_self_media_recent', user_self_media_recent);

export default instagramRouter;
