const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Schema defines structure of our document
const archiveSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    yoe : {
        type : String,
        required : true
    },
    drive : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    }
}, {timestamps : true});

//Created a model based on blogSchema
const Archive = mongoose.model('Archive', archiveSchema);

module.exports = Archive;
