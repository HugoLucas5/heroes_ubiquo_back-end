const express = require('express');
const morgan = require('morgan'); //morgan for watch the request
const mongoose = require('mongoose'); // for easy mongo's handling
const app = express();

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
const genderRoutes = require('./routes/genderRoutes')
const publisherRoutes = require('./routes/publisherRoutes')
const alignmentRoutes = require('./routes/alignmentRoutes');
const heroRoutes = require('./routes/heroesRouters');


//settings
app.set('port', process.env.PORT || 3000);


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

//routes
app.use(genderRoutes)
app.use(publisherRoutes)
app.use(alignmentRoutes)
app.use(heroRoutes)


//starting the sever
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`)
});