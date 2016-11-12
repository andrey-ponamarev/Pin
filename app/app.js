import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config';
import { getPins, setPin, deletePin } from './controllers/pin';

const db = mongoose.connect(config.db.development);
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/pin', getPins);
app.post('/pin', setPin);
app.delete('/pin/:id', deletePin);

export default app;
