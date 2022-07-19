require('express-async-errors');
const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/login', authRouter);

app.use('/user', userRouter);

app.use(errorHandler);

module.exports = app;
