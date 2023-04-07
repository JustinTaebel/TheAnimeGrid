const express = require('express')
const router = express.Router()
const notAuth = require('./notAuth')

const users = require('../models/users')

router.get('/logout', async (req, res, next) => {
    req.session.destroy()
    req.logout()
    res.redirect('/')
})