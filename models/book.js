const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    isbn:{
        type:Number,
        required:true
    },
    authorName:{
        type:String,
        required:true
    },
    bookName:{
        type:String,
        required:true
    },
    pages:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const bookModel = mongoose.model("book",bookSchema);
module.exports = bookModel;
