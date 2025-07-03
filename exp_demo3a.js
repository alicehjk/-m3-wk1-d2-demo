var express = require('express');
var router = express.Router();

router.get('/home', function(req, res){
    res.send('Router Home Page');
});

router.get('/about', function(req, res){
    res.send('Router About Page');
});

module.exports = router;
