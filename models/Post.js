const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['Anime', 'Manga', 'Guide', 'Review', 'Funko'],
        required: true
    },
    genre: {
        type: String,
        enum: ['Slice of Life', 'Sports', 'Romance', 'Action', 'Drama', 'Thriller', 'Fantasy'],
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
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
    }

    
})

module.exports = mongoose.model('Category', categorySchema)