const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const users = require('../models/users')

router.get('/', (req, res) => {
    res.render('login', {message: ''})
})

router.post('/', async (req, res) => {
    const user = await users.findOne({username: req.body.username})
    if (user == null) {
        return res.render('login', {message: 'Incorrect Username or Password.'})
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.redirect('/post/new')
        } else {
            console.log('Incorrect Password.')
            res.render('login', {message: 'Incorrect Username or Password.'})
        }
    } catch {
        res.render('login', {message: 'Unknown Error'})
    }
})

module.exports = router