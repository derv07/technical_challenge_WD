require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('./config/cors.config');

const app = express();
app.use(logger('dev'));
app.use(cors);

app.use(express.json());
app.use('/api/v1', require('./config/routes.config'));

app.use((req, res, next) => next(createError(404, 'Page not found')));
app.use((error, req, res, next) => {

  console.error(error)

  const data = {
    message: error.message
  }

  res.status(error.status).json(data);
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Server started on port ${port}`));