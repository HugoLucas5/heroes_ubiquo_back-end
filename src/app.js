const express = require('express');
const morgan = require('morgan'); // Morgan for watch the request
require('./config/db');  // Configure DB connection
require('dotenv').config({
    path: 'development.env',
});  // Setting environment variables
const routes = require('./routes');  // Import routes

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(routes);  // Add all routes


// Starting the sever
app.listen({
  hostname: process.env.HOST,
  port: process.env.PORT,
}, () => {
  console.log(`*** Server start on ${process.env.HOST}:${process.env.PORT} ***`);
});