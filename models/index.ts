import { oauth2 } from "googleapis/build/src/apis/oauth2";

const dbConfig = require('../config/db.config.ts');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {
    Mongoose : mongoose, 
    URL:dbConfig(),
    listItem: mongoose,
    user: oauth2
};
db.Mongoose = mongoose;
db.URL = dbConfig.url;
db.listItem = require('./listItem.ts')(mongoose);
db.user = require('./user.ts')(mongoose);

module.exports = db;
