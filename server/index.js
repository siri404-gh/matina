/* eslint-disable no-console */
// const path = require('path');
const express = require('express');
const { dist, ports: { serverPort } } = require('../config/variables');

const app = express();
const port = process.env.PORT || serverPort;

app.use('/', express.static(dist));

app.listen(port, () => console.log(`SERVER: Listening on port ${port}`));