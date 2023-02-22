const express = require('express');
const routerApi = require('./routes');
//const cors = require("cors");

const {logErrors, errorHandler, boomErrorHandler} = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

const whilelist = ['http://localhost', 'https://myapp.cl'] // ? rutas de las cuales SI quiero recibir peticiones
const options = {
  origin: (origin, callback) => {
    if (whilelist.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('no permitido'))
    }
  }
}
//app.use(cors(options));

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/new', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

routerApi(app)

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port , () => {
  console.log('http://localhost:'+ port);
});
