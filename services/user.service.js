const boom=require('@hapi/boom');

const {models} = require('./../libs/sequelize');


class UserService{
  constructor(){
  }

  async create(data) {
    return data;
  }

  async find() {
    const rs = await models.User.findAll()
    return rs;
  }

  async findOne(id) {
    const query = `SELECT * FROM tasks WHERE id=${id} `;
    const rs = await this.pool.query(query);
    return rs.rows;
  }

  async update(id,changes) {
    const query = `SELECT * FROM tasks WHERE id=${id} `;
    const rs = await this.pool.query(query);
    return rs.rows;
  }

  async delete(id) {
    return{id};
  }
}
module.exports=UserService;
