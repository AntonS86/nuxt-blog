const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const passportStrategy = require('./middleware/passport-strategy');
const keys = require('./keys');
const authRoutes = require('./routes/auth.routes');
const postRoutes = require('./routes/post.routes');

mongoose.connect(keys.MONGO_URI)
  .then(() => console.log('mongoDb connected'))
  .catch(err => console.log(err));

app.use(passport.initialize());
passport.use(passportStrategy);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

module.exports = app;
