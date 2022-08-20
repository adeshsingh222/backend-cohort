// const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")

const createNewBook= async (req, res) =>{
    let bookData= req.body
    let authorId= bookData.author_id
    if(!authorId){
        return res.send({msg: "Author Id is mandatory"})
    }
    let savedData= await BookModel.create(bookData)
    res.send({msg: savedData})
}

const createNewAuthor= async (req,res) =>{
    let authorData= req.body
    let data= await authorModel.create(authorData)
    res.send({msg: data})
}

const getBooksData= async  (req, res) => {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}

const booksByChetanBhagat= async (req,res) =>{
    let name= await BookModel.find({ author_name: "Chetan Bhagat", author_id: 1 })
    res.send({ msg: name})
}

const twoStates= async (req,res) =>{
    let newName= await BookModel.findOneAndUpdate({ name: "Two states"},{$set: {price: 100}})
    let value = newName.author_id
    let price = newName.price
    let newData = await authorModel.find({ author_id: value}).select({author_name: 1, price: 1})
    res.send({msg: price, newData})
}

const findAuthor = async (req,res) =>{
    let books= await BookModel.find( { price : { $gte: 50, $lte: 100} } )
    let newBooks= books.map(x=>x.author_id)
    let finalBooks= await authorModel.find({author_id: newBooks}).select({author_name : 1, _id : 0})
    res.send({ msg: finalBooks})
}

const updateBooks= async (req, res) => {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async  (req, res)  => {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.findAuthor= findAuthor
module.exports.twoStates= twoStates
module.exports.booksByChetanBhagat= booksByChetanBhagat
module.exports.createNewAuthor= createNewAuthor
module.exports.createNewBook= createNewBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks