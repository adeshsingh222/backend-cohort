const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_name: String, 
    age: Number,
    address: String,
    author_id: {
        type: Number,
        required: true,
    },
}, { timestamps: true });


module.exports = mongoose.model('newAuthor',  authorSchema)
