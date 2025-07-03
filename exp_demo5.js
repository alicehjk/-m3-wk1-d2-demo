var express = require('express');
var app = express();

app.get('/bookings/:bookingId', function(req, res){
    res.send('Booking ID: ' + req.params.bookingId);
});

app.listen(3000, function(){
    console.log('Server running on http://localhost:3000/bookings/:bookingId');
});
