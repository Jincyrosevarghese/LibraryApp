
const express = require('express');
const addauthorRouter = express.Router();
const Authordata=require('../model/Authordata');
function router(nav) {
    addauthorRouter.get('/', function (req, res) {
        res.render('addauthor', {
            nav,
            title: 'Library'
        });
    });
    addauthorRouter.post('/add', function (req, res) {
        var item = {
            title: req.body.title,
            about: req.body.about,           
            image: req.body.image
        }
        var author=Authordata(item);
        author.save();
        res.redirect('/authors');
    });
    return addauthorRouter;
}
module.exports = router;