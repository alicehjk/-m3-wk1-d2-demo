var express = require('express');
var app = express();

app.get('/home', (req, res) => {
    res.send('Home Page');
});
app.get('/about', (req, res) => {
    res.send('About Page');
});

// 404 handler
app.use(function(req, res){
    res.status(404).send('404 Not Found');
});

app.listen(3000, function(){
    console.log('Server running on http://localhost:3000');
});
