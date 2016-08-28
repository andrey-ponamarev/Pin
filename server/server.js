require('babel-register');
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/dist'));

//app.get('/user', (req, res) => {
//    res.json({a: 1});
//});

export default app;
