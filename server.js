//--------------Dependencies -----------------//
const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const proxy = require('http-proxy-middleware');
const morgan = require('morgan');
// const config = require('./config');

//-------------------------------------------//	

const app = express();
const PORT = process.env.PORT || 3002;

// ------ Configure body parser for AJAX requests--------//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static(path.join('campuscarrier-managertool/build')));
// Add routes, both API and view
app.use('/',routes);
// app.use('/auth', routes);
// app.use('/', proxy({target: 'localhost:3002', changeOrigin: true}));
//-------------------------------------------------------//

//------------ Set up promises with mongoose -----------//
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CampusCarriers",
  {
    useMongoClient: true
  }
);
//----------------------------------------------------//

//--------------- Start the API server ---------------//
app.listen(PORT, function() {
  console.log(`🌎  ==> CampusCarriers Server on PORT ${PORT}!`);
});
// --------------------------------------------------//

