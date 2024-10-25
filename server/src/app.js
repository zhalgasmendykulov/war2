const express = require('express');
const cookieParser = require('cookie-parser');

const morgan = require('morgan');

const accountRouter = require('./routes/accountRouter');
const tokensRouter = require('./routes/tokensRouter');
const watchesRouter = require('./routes/watchesRouter');
const userRouter = require('./routes/userRouter')
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const accountRouter = require('./routes/accountRouter');
const tokensRouter = require('./routes/tokensRouter');
const watchesRouter = require('./routes/watchesRouter');

const app = express();

app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/watches/', watchesRouter);
app.use('/api/account/', accountRouter); //2222
app.use('/api/tokens/', tokensRouter);
app.use('/api/users/', userRouter)

module.exports = app;
module.exports = app;
