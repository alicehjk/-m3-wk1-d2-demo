var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World!');
});

// had add console to avoid error
app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000');
});
