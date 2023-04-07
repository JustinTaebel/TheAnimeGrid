const express = require('express')
const router = express.Router()

router.get('/new', (req, res) => {
    res.render('post/new')
})

router.post('/', (req, res) => {
    
})

router.get('/', (req, res) => {
    res.render('post/post')
})



module.exports = router