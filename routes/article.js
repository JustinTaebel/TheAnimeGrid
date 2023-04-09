const express = require('express')
const router = express.Router()
const passport = require('passport')
const isAuth = require('./authUser')
const Post = require('../models/Post')

router.get('/new', isAuth, (req, res) => {
    res.render('post/new', { post: new Post( {author: req.user.username, createdAt: new Date().toLocaleDateString()}) })
})

router.get('/:slug', async (req, res) => {
    try {
        const post = await Post.findOne( {slug: req.params.slug})
        res.render('post/post', {post: post})
    } catch {
        res.redirect('/coming-soon')
    }
})

router.post('/', async (req, res) => {
    let post = new Post({
        category: req.body.category,
        genre: req.body.genre,
        title: req.body.title,
        author: req.user.username,
        description: req.body.description,
        createdAt: new Date().toLocaleDateString(),
        image: 'lightblue',
        imageSource: '#',
        markdown: req.body.markdown
    })
    try {
        post = await post.save()
        res.redirect(`/post/${post.slug}`)
    } catch (error) {
        res.render('post/new', {post: post})
    }
    
})



module.exports = router