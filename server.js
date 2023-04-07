if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const session = require('express-session')
const flash = require('express-flash')
const expressLayouts = require('express-ejs-layouts')
const app = express()

const passport = require('passport')


app.listen(process.env.PORT || 3000)

const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')
const developRouter = require('./routes/develop')
const articleRouter = require('./routes/article')
const loginRouter = require('./routes/login')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(express.urlencoded({extended: false}))
app.use(flash())
app.use(session({
    secret:process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: false
}))
app.use(expressLayouts)
app.use(passport.authenticate('session'));

app.use(express.static('public'));
app.use('/', indexRouter)
app.use('/about', aboutRouter)
app.use('/coming-soon', developRouter)
app.use('/post', articleRouter)
app.use('/', loginRouter)

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))
