const express = require('express');
const app = express();
const nav = [
    { link: '/home', name: 'Home' },
    { link: '/books', name: 'Books' },
    { link: '/authors', name: 'Authors' },
    // { link: '/signup', name: 'Sign Up' },       
    { link: '/addbook', name: 'Add Books' },
    { link: '/addauthor', name: 'Add Author' },
    { link: '/login', name: 'Logout' }
];


const authorRouter = require('./src/routes/authorRoutes')(nav)
const booksRouter = require('./src/routes/bookroutes')(nav)
const signRouter = require('./src/routes/signupRoutes')
const loginRouter = require('./src/routes/loginRoutes')
const addbookRouter = require('./src/routes/addbookRoutes')(nav)
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav)
const homeRouter = require('./src/routes/homeroutes')(nav)


app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);
app.use('/authors', authorRouter);
app.use('/signup', signRouter);
app.use('/login', loginRouter);
app.use('/home', homeRouter);
app.use('/addbook', addbookRouter);
app.use('/addauthor', addauthorRouter);
app.get('/', function (req, res) {
    res.render('index', {
        nav,
        title: 'Library'
    });
});

 const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Our Library app is running on port ${ PORT }`);
});