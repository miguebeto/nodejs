const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/test'
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});