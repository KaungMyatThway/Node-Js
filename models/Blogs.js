const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title :{
        type : String,
        required : true
    },
    intro :{
        type : String,
        required : true
    },
    body :{
        type : String,
        required : true
    },

},{timestamps:true}) 

const BLog = mongoose.model('Blog' ,BlogSchema);

module.exports = BLog;