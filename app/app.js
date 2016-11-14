import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config';
import { getPosts, setPost, deletePost } from './controllers/posts';

const db = mongoose.connect(config.db.development);
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/posts', getPosts);
app.post('/api/posts', setPost);
app.delete('/api/posts/:id', deletePost);

export default app;
