const express = require('express')
const handleBookController = require('../controllers/book.js')
const router = express.Router();

router.get('/books',handleBookController.handleGetAllBooks)
router.get('/books/new', handleBookController.handleGetNewBookPage)
router.get('/books/:bookId',handleBookController.handleGetAllBooksById)
router.post('/books',handleBookController.handleCreateNewBook)
router.delete('/books/:bookId',handleBookController.handleDeleteBooksById)
router.get('/books/edit/:bookId',handleBookController.handleEditBookById)
router.put('/books/:bookId',handleBookController.handleUpdateBookById)

module.exports = router; 