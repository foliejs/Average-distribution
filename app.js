const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
// const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const db = require('./model/index')

const index = require('./routes/index')
const users = require('./routes/users')
const swagger = require('./routes/swagger')
const session = require('express-session')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

db.PoolIndex.findOne({area:'shanghai'},(err,res)=>{
  if(!res){
    let pool = new db.PoolIndex({area:'shanghai',index:""})
    global.GLOBALCOUNT = 0
    pool.save()
  }else{
    global.GLOBALCOUNT = res.index
  }
})
// global db
global.db = db



// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
// app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({
  secret: 'cute boy',
  resave: false,
  saveUninitialized: true
}))

app.use('/', index)
app.use('/user', users)
app.use('/swagger', swagger)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

process.on('SIGINT', function () {
  db.PoolIndex.findOneAndUpdate({area:'shanghai'},{'$set':{
    index:GLOBALCOUNT
  }},(err,res)=>{
    if(!err) console.log('更新成功')
    process.exit(0)
  })
})

module.exports = app