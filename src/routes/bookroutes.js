
const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav) {
    booksRouter.get('/:id', function (req, res) {
        const id = req.params.id;
        Bookdata.findOne({_id:id}).then(function (book) {
            res.render('book', {
                nav,
                title: 'Library',
                book
            });
        });
    });
    booksRouter.get('/', function (req, res) {
        Bookdata.find().then(function (books) {
            res.render('books', {
                nav,
                title: 'Library',
                books
            });
        });

    });
    booksRouter.post('/delete', function (req, res) {

        const id = req.body.id;  
    
        booBookdatakdata.findOneAndDelete({ _id: id })
            .then(function () {
    
                res.redirect('/books')
    
            })  
    })
    
    
    
    //router to edit book
    booksRouter.post('/edit', function (req, res) {
    
        Bookdata.findById(req.body.id, function(err, data){
            if (err) {
                throw err;
            }
            else {
                res.render('editbook', {data})
            }
        })
    })
    
    
    
    //router to update book
    booksRouter.post('/update', function (req, res) {
    
        Bookdata.findByIdAndUpdate(req.body.id, { $set: req.body }, function (err, data) {
            if (err) {
                res.json({ status: "Failed" });
            }
            else if (data.n == 0) {
                res.json({ status: "No match Found" });
            }
            else {
                res.redirect("/books");
            }
    
        }) 
    })
    return booksRouter;
}
module.exports = router;