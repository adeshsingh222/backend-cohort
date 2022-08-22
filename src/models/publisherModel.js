const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema( {
    name : String,
    headQuarter: String 

}, {timeStamp : true} )


module.exports= mongoose.model('myNewPublisher', publisherSchema)


