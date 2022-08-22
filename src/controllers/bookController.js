const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook= async (req, res) => {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}


const getBooksData= async (req, res) => {
    let books = await bookModel.find()
    res.send({data: books})
}



const getNewData= async (req,res) => {
    let newData= req.body
    let authorsData =  req.body.author_id
    let publisherData =  req.body.publisher
    
    const authorvalidation = await authorModel.find({_id:authorsData}).select({_id:1})
    const publishervalidation = await publisherModel.find({_id:publisherData}).select({_id:1})

    if (authorvalidation.length > 0) {
        if (publishervalidation.length > 0) {
            const newBook = await bookModel.create(newData)
            res.send({ newBook: newBook })
        } else {
            res.send({ msg:" THE HELL BROO! INSERT THE RIGHT OUTPUT" })
        }
    } else {
        res.send({ msg: "ARE YOU KIDDING ME, DAMN YOU DID IT AGAIN LOL! " })
    }
}
        // while((authorvalidation.length > 0) && (publishervalidation.length > 0) ) {
        //     let newBook;
        //     if( newBook =  bookModel.create(newData)){
        //        return res.send({ newBook: newBook })
        //     }
        //     else{
        //         res.send({Error:"code is wrong"})
        //     }
        // }
       
        const getBooksWithAuthorDetails = async (req, res) => {
            let specificBook = await bookModel.find().populate('author_id')
            res.send({data: specificBook})
        }


        
         const updateBookOfPublisher= async (req,res) => {
              let data =await publisherModel.find({$or: [{"name": "Penguin"}, {"name" : "HarperCollins"}]})
              let updatedBook = await bookModel.updateMany({publisher:data},{ hardCover: true})
              res.send(updatedBook)         

         }
        
         const booksWrittenByAuthor = async (req,res) => {
            let WrittenByAuthor = await authorModel.find({rating:{$gt:3.5}})
            let concluson = await bookModel.updateMany({author_id:WrittenByAuthor},{$inc:{price:+10}})
            res.send(concluson)
         }



  



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getNewData = getNewData
module.exports.updateBookOfPublisher = updateBookOfPublisher
module.exports.booksWrittenByAuthor = booksWrittenByAuthor
