const express = require("express");

const app = express();

app.set('views', './views')
app.set('view engine', 'ejs')

app.get("/", (req, res) => {

  const blogs = [
    {title : 'title1', text : 'hello 1'},
    {title : 'title2', text : 'hello 2'},
    {title : 'title3', text : 'hello 3'}
  ]
  res.render('index',{blogs,title : 'HOME'});
});

app.get("/about", (req, res) => {
    res.render('about', {title : 'About'});
});

app.use((req,res) => {
    res.status(404);
    res.render('404',{title : '404'});

})

app.listen(3000);
