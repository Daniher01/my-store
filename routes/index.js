const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categorieRouter = require('./categories.router');

function routerApi(app){
  app.use('/api/products', productsRouter);
  app.use('/api/users', usersRouter);
  app.use('/api/categories', categorieRouter);
}

module.exports = routerApi;
