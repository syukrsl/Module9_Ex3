const express = require('express');
require('dotenv').config();
const dbConnect = require('./dbConnect');
dbConnect.connectMySQL();

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
      console.log("Listening on port ", port);
});