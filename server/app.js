const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./keys');
const authRoutes = require('./routes/auth.routes');

mongoose.connect(keys.MONGO_URI)
  .then(() => console.log('mongoDb connected'))
  .catch(err => console.log(err));

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes)

module.exports = app;
