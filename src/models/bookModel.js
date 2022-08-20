const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    author_id: {
        type: Number,
        required: true,
    },
    name: String,
    price: Number,
    ratings: Number
},{ timestamps: true});

module.exports = mongoose.model('newBook', bookSchema)