const express = require('express');
const Admin = require('../models/BookModel')
const { addBook, loginUser } = require('../controllers/StudentController');
const router = express.Router();

rrouter.post('/admin/books', addBook);
router.post('/admin/login', loginUser);

module.exports = router;
