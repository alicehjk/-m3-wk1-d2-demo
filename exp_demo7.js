var express = require('express');
var app = express();

// Middleware logger
app.use(function(req, res, next){
    console.log('Time:', Date.now());
    next();
});

app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, function(){
    console.log('Server running on http://localhost:3000');
});
