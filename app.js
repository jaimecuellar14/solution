const express = require('express');
const routes = require('./app/routes');
const app = express();

app.use(routes);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Expose-Headers', 'X-Total-Pages, Cache-Control, Expires, Pragma');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE, HEAD');
    next();
});

app.listen(3000, function () {
    console.log("Running API")
})