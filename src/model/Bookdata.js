const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userone:userone@ictjincy.oaffj.mongodb.net/Library?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    image: String
});


var Bookdata=mongoose.model('bookdata',BooksSchema);

module.exports=Bookdata;