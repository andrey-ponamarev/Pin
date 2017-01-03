import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config';
import { getPosts, setPost, deletePost, getPostById } from './controllers/posts';

/* Instagram */
import {instagram} from 'instagram-node';
import Bluebird from 'bluebird';

const api = instagram();
const redirect_uri = 'http://localhost:3000/add-post';

Bluebird.promisifyAll(api);

api.use({
    client_id: '44524381264c4804888e067a8f4bfea9',
    client_secret: 'a2824848290f4aeaa598be162144a4ea'
});

/* Instagram */

const db = mongoose.connect(config.db.development);
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/posts', getPosts);
app.get('/api/posts/:id', getPostById);
app.post('/api/posts', setPost);
app.delete('/api/posts/:id', deletePost);

/* Instagram */
const authorize_user = (req, res) => {
    res.redirect(api.get_authorization_url(redirect_uri, {
        scope: ['likes', 'public_content', 'follower_list', 'relationships', 'comments', 'basic'],
        state: 'a state'
    }));
};

const handleauth = (req, res) => {
    api.authorize_user(req.query.code, redirect_uri, function(err, result) {
        if (err) {
            res.send("Didn't work");
        } else {
            res.cookie('instaToken', result.access_token, {maxAge: 9000000, httpOnly: true});
            res.redirect('/');
        }
    });
};

app.get('/api/authorize_user', authorize_user);
app.get('/api/handleauth', handleauth);
app.get('/api/instagram/add_geography_subscription', (req, res) => {
    api.add_geography_subscription(
        48.565464564,
        2.34656589,
        100,
        'http://MYHOST/geography',
        {'5eb2e6e86ff04ce2b2824d9df4084eb7'},
        function(err, result, remaining, limit){});
});

app.get('/api/user_self_media_recent', (req, res) => {
    api.use({access_token: req.cookies.instaToken});

    return api.user_self_media_recentAsync({count: 20}).then((medias, pagination, remaining, limit) => {
        console.log('err', medias, pagination, remaining, limit);
        res.json(medias);
    });
});

export default app;
