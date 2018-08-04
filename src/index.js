import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

import connectToDb from './services/dbConnection';

import authRouter from './routes/auth';
import eventRouter from './routes/event';

const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;

require('./services/passport');

const app = express();

connectToDb();

// middlewares

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// router

app.use('/auth', authRouter);
app.use('/events', eventRouter);

// final error handlers

app.use(() => {
    throw new Error('Not found');
});

app.use((error, req, res, next) => {
    res.status(404).send({ message: error.message });
});

app.listen(PORT, () => {
    console.log('Listening on port', PORT);
});
