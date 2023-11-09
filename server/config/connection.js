const mongoose = require('mongoose');
require("dotenv").config();

// console.log("CONNECTION ENV:", process.env)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jackets_db');

module.exports = mongoose.connection;
