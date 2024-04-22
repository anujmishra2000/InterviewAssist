//express app
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const archiveRoutes = require('./routes/archiveRoutes')
const { result } = require('lodash');
require('dotenv').config();

// console.log(process.env);

const app = express();

//connect to mongoDB atlas
const dbURI = process.env.DB_URI;
mongoose.connect(dbURI)
.then((result) => {
    app.listen(3000);
})
.catch((err) =>  console.log(err));

//listen for request


app.set('view engine', 'ejs');
//app.set('views', 'myViews');

app.use(express.urlencoded({ extended : true}));

//middleware and static 
app.use(express.static('public'));
// app.use(morgan('dev'));



app.get('/', (req, res) => {
    res.redirect('/archives');
});

//archive routes
app.use('/archives', archiveRoutes);

app.get('/about', (req, res) => {
    //res.send('<p>Home page</p>');
    // res.sendFile(__dirname + '/views/about.html');
    res.render('about', { title : 'About'});
});







//redirects
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });

//404 or last req if not other route matches
app.use((req, res) => {
    res.status(404).render('404', { title : '404'});
})