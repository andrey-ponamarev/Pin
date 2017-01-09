import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config';
import routes from './routes';
import accessControlAllow from './middlewares/accessContolAllow';

const db = mongoose.connect(config.db.development);
const app = express();

app.set('views', './server/views');
app.set('view engine', 'jade');

app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(accessControlAllow);
app.use('/', routes);

app.listen(config.server.port, () => console.log(`server start on port: ${config.server.port}`));
