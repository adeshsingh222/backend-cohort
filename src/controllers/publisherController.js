const publisherModel = require ('../models/publisherModel')

const createPublisher = async (req,res) => {
    
    let myPublisher = req.body

    let resultPublisher = await publisherModel.create(myPublisher)

    res.send({data:resultPublisher})
}

const publisherData = async (req,res)=>{
    let mypublishedData= await publisherModel.find()
    res.send({data: mypublishedData})
}

module.exports.createPublisher = createPublisher
module.exports.publisherData = publisherData

  
    