var mongoose = require('mongoose');

//Create School Registration Schema using mongoose
var hotelRegisterSchema = mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String },
    name: { type: String },
    date: { type: String },
    hotelname: { type: String },
    type: { type: String }
}, { collection: 'hotel-register' });
var HotelRegister =module.exports= mongoose.model('HotelRegister', hotelRegisterSchema);