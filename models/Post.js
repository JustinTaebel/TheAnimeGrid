const mongoose = require('mongoose')
const slugify = require('slugify')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Anime', 'Manga', 'Game', 'Funko'],
        required: true
    },
    genre: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date().toLocaleDateString()
    },
    image: {
        type: String,
        required: true
    },
    imageSource: {
        type: String,
        required: true
    },
    markdown: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }    
})

postSchema.pre('validate', function(next) {
    if (this.title) {
        this.slug = slugify(this.title, {lower: true, strict: true})
    }

    next()
})

module.exports = mongoose.model('Post', postSchema)