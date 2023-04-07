const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local')
const bcrypt = require('bcrypt')
const notAuth = require('./notAuth')

const users = require('../models/users')

passport.use(new LocalStrategy(async function verify(username, password, cb) {
    //finds user in database
    const user = await users.findOne({username: username})
    if (!user) {
        return cb(null, false, {message: 'Incorrect username or password'})
    }

    //checks password of user
    if(await bcrypt.compare(password, user.password)) {
        return cb(null, user)
    } else {
        return cb(null, false, {message: 'Incorrect Username or Password.'})
    }
}))

router.get('/login', notAuth, (req, res) => {
    res.render('login', {message: ''})
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
    })    
)

router.get('/logout', (req, res, next) => {
    req.logout(function(err) {
        if (err) { return next(err) }
        res.redirect('/')
      })
})


passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      cb(null, { id: user.id, username: user.username })
    })
})
  
passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user)
    })
})

module.exports = router