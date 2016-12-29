import express from 'express';
import instagramApi  from 'instagram-node';
import Bluebird     from 'bluebird';
import config from '../config.js';

const {redirect_uri, secret} = config;
const router = express.Router();
const api = instagramApi.instagram();

Bluebird.promisifyAll(api);

api.use(secret);

exports.authorize_user = (req, res) => {
    console.log('/authorize_user');

    res.redirect(api.get_authorization_url(redirect_uri, {
        scope: ['likes', 'public_content', 'follower_list', 'relationships', 'comments', 'basic'],
        state: 'a state'
    }));
};

exports.handleauth = (req, res) => {
    console.log('/handleauth');
    api.authorize_user(req.query.code, redirect_uri, (err, result) => {
        if (err) {
            res.send("Didn't work");
        } else {
            res.cookie('instaToken', result.access_token, {maxAge: 9000000, httpOnly: true});
            res.redirect('/');
        }
    });
};


router.get('/', (req, res) => {
    if (req.cookies.instaToken) {
        api.use({access_token: req.cookies.instaToken});
        res.render('admin', {
            content: 'Log out'
        });
    } else {
        res.render('admin', {
            showLogin: 'Log in'
        });
    }
});

router.get('/authorize-user', exports.authorize_user);

router.get('/handleauth', exports.handleauth);

router.post('/search', (req, res) => {
    api.use({access_token: req.cookies.instaToken});

    return api.user_self_media_recentAsync({count: 20}).then((medias, pagination, remaining, limit) => {
        console.log('err', medias, pagination, remaining, limit);
        res.json(medias);
    });

    //return api.user_searchAsync(req.body.search).then((result) => {
    //
    //    res.json(result);
    //});
});

export default router;
