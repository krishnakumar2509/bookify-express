const express = require('express')
const app = express();


const Book = require('../models/book')
 
async function handleGetAllBooks(req,res){
    const books = await Book.find({})
    return res.render("books",{books})
}

async function handleGetAllBooksById(req,res){
    const bookId = req.params.bookId; 
    const book = await Book.findById(bookId)
    if(!book){
            return res.status(404).json({error:"book not found"})
        }
    return res.render("book",{book});
}

async function handleCreateNewBook(req,res){
    const book = await Book.create(req.body) 
    return res.json({message:"book added successfully"})
}

async function handleGetNewBookPage(req, res) {
    return res.render("new-book")
}

async function handleDeleteBooksById(req,res){
    const bookId = req.params.bookId ; 
    const book =await Book.findByIdAndDelete(bookId)
    return res.json({message:"book deleted successfully"})
}
 
async function handleEditBookById(req,res){
    const book = await Book.findById(req.params.bookId)
    if(!book){
        return res.status(404).json({error:"Book not found"})
    }
    return res.render("edit-book",{book})
}

async function handleUpdateBookById(req,res){
    const book = await Book.findByIdAndUpdate(req.params.bookId,req.body, {new:true,runValidators:true})
    if(!book){
        return res.status(404).json({error:"Book not found"})
    }
    return res.json({status:"Book updated successfully"})
}

module.exports  = { 
    handleGetAllBooks,
    handleGetAllBooksById,
    handleCreateNewBook,
    handleDeleteBooksById,
    handleEditBookById,
    handleUpdateBookById,
    handleGetNewBookPage
}