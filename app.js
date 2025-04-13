const express = require("express");

const app = express();

app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
  res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.use((req,res) => {
    res.status(404);
    res.render('404');

})

app.listen(3000);
