const mongoose = require('mongoose')
const Schema = mongoose.Schema

const book_schema = new Schema({
    name: String,
    genre: String,
    authorId: String
})

module.exports = mongoose.model('Book', book_schema)