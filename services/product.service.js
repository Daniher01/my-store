const faker = require('faker');
const boom = require("@hapi/boom");

const {models} = require('./../libs/sequelize');

class ProductsService{

  constructor(){
  }

  async find(){
    const rs = await models.Product.findAll();
    return rs;
  }

  async findOne(id){
    const query = `SELECT * FROM tasks WHERE id=${id} `;
    const rs = await sequelize.query(query);
    // if(!product){
    //   throw boom.notFound('Product not found')
    // }
    // if(product.isBlock){
    //   throw boom.conflict('Product is block')
    // }
    return  rs.rows;
  }

  async update(id, changes){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('Product not found')
    }
    const product = this.products[index]
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id)
    if(index === -1){
      throw boom.notFound('Product not found')
    }
    this.products.splice(index, 1);
    return { id };
  }

}
module.exports = ProductsService
