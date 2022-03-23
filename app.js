const dotenv = require('dotenv');
const express = require('express');
const http = require('./middleware/http.js');
const v1 = require('./routes/v1.js');
dotenv.config();

const app = express();
app.use(express.json());

// midlewares loading
app.use(http.middleware);

// routes loading
v1(app);

app.listen(process.env.PORT);

module.exports = app;