const boom=require('@hapi/boom');

//const getConnection=require('../libs/postgres');

const pool = require('../libs/postgres.pool');


class UserService{
  constructor(){
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err))
  }

  async create(data) {
    return data;
  }

  async find() {
    const query = 'SELECT * FROM tasks';
    const rs = await this.pool.query(query);
    return rs.rows;
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
