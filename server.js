const express = require('express');
const serveStatic = require('server-static');
const path = require('path');

const app = express();

app.use('/',serveStatic(path.join(__dirname,'/dist')));

const port = process.env.PORT || 8080 ;


app.listen(port);

console.log('listenin port '+port);