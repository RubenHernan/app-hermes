const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

//inicializaciones
const app = express();

//configuraciones 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
  }))
  app.set('view engine', '.hbs');

  //middlewares

  app.use(morgan('dev'));
  app.use(express.urlencoded({extended: false}));
  app.use(express.json());

  //variables globales
  app.use((req,res,next)=>{
    next();
  })

  //routes
  app.use(require('./routes'));
  app.use(require('./routes/hermes'));

  //public
  app.use(express.static(path.join(__dirname, 'public')));

  // Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
  });

  