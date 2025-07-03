var express = require('express');
var app = express();
var routes = require('./exp_demo3a');

app.use('/routedemo', routes);

app.listen(3000, function(){
    console.log('Server running on http://localhost:3000/routedemo/home');
});
