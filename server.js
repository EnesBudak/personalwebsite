const express = require('express');

const app = express();



if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname + "/dist/"));

app.get(/.*/, (req, res) => {
  res.sendfile(__dirname + "/dist/index.html");
});
};





