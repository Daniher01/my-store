const { User, UserSchema } = require('./user.model');
const { Product, ProductShema } = require('./product.model');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductShema, Product.config(sequelize));
}

module.exports = setupModels;
