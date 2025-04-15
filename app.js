const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require('express-ejs-layouts');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.use(express.urlencoded({ extended: true }));

// db connection
let mongoUrl = "mongodb+srv://kaungmyatthway:test12345@cluster0.ya3n0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(mongoUrl).then(() => {
    // after db connect start server
    app.listen(3000);
}).catch(e => {
    console.log(e);
});

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/defaults');

// Use blog routes
app.use(blogRoutes);

app.use((req, res) => {
    res.status(404);
    res.render('404', { title: '404' });
});


