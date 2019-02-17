var mongoose = require('mongoose');

var schema = mongoose.Schema({
    name: { 
        type: String, 
        required: true
    }, 
    price: {
        required: true,
        type: String,
    }, 
    description: {
        required: true,
        type: String        
    },
    cover: {
        required: true,
        type: String        
    }

});

module.exports = mongoose.model('Book', schema);