const express = require('express')
const router = express.Router()
const passport = require('passport')
const isAuth = require('./authUser')

router.get('/new', isAuth, (req, res) => {
    res.render('post/new')
})

router.post('/', (req, res) => {
    
})

router.get('/', (req, res) => {
    res.render('post/post')
})



module.exports = router