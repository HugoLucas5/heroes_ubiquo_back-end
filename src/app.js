const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')
const app = express()

//db connection
const user = 'test'
const password = 'ubiquo-test'
const db = 'heroes'
const uri = `mongodb+srv://${user}:${password}@cluster0.e7cd7.mongodb.net/${db}?retryWrites=true&w=majority`

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log('Base de datos conectada'))
  .catch(e => console.log(e))


//import routes
const indexRoutes = require('./routes/index')


//settings
app.set('port', process.env.PORT || 3000)


//middleware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//routes
app.use('/', indexRoutes)


//starting the sever
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
})