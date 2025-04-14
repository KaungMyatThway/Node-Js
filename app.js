const express = require("express");

const app = express();
const mongoose = require("mongoose");
const Blog = require('./models/Blogs');

//db connection

let mongoUrl = "mongodb+srv://kaungmyatthway:test12345@cluster0.ya3n0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUrl).then(() => {
    //after db connect start server
    app.listen(3000);
}).catch(e => {
    console.log(e);
})

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/add-blog', async (req,res) => {
    let blog = new Blog({
        title : 'BLog title 3',
        intro : 'blog intro 3',
        body : 'blog body 3'
    })

   await blog.save();

   res.send('blog saved');
})

app.get("/",async (req, res) => {

 let blogs = await Blog.find().sort({createdAt : -1});

//   const blogs = [
//     {title : 'title1', text : 'hello 1'},
//     {title : 'title2', text : 'hello 2'},
//     {title : 'title3', text : 'hello 3'}
//   ]
  res.render('index',{blogs,title : 'HOME'});
});

app.get("/about", (req, res) => {
    res.render('about', {title : 'About'});
});

app.use((req,res) => {
    res.status(404);
    res.render('404',{title : '404'});

})


