const Blog = require('../models/Blogs');

exports.createBlog = async (req, res) => {
    let blog = new Blog({
        title: req.body.title,
        intro: req.body.intro,
        body: req.body.body
    });

    await blog.save();
    res.redirect('/');
};

exports.getAllBlogs = async (req, res) => {
    let blogs = await Blog.find().sort({ createdAt: -1 });
    res.render('index', { blogs, title: 'HOME' });
};

exports.getBlogById = async (req, res) => {
    let blog = await Blog.findById(req.params.id);
    res.json(blog);
};

exports.renderCreateBlog = (req, res) => {
    res.render('blogs/create', { title: 'Blog Create' });
};

exports.renderAboutPage = (req, res) => {
    res.render('about', { title: 'About' });
};