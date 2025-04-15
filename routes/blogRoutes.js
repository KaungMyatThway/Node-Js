const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/blogs', blogController.createBlog);
router.get('/', blogController.getAllBlogs);
router.get('/blogs/:id', blogController.getBlogById);
router.get('/blogs/create', blogController.renderCreateBlog);
router.get('/about', blogController.renderAboutPage);

module.exports = router;