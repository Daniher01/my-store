const express = require('express');
const ProductsService = require('./../services/product.service')
const validatorHandler = require('./../middlewares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema} = require('./../schemas/product.schema')

const router = express.Router();
const service = new ProductsService();


router.get('/',async (req, res) => {
  const products = await service.find();
  res.json(products);
})

router.get('/:id',
  validatorHandler(getProductSchema, 'params'), // ? esto es un middleware que valida los datos
  async (req, res, next) => { // ? esto es un middlerware que conecta con el servicio
    try{
      const {id } = req.params
      const product = await service.findOne(id);
      res.json(product);
    }catch(error){
      next(error)
    }

})

router.post('/',
validatorHandler(createProductSchema, 'body'),
  async (req,res) => {
    const body = req.body;
    const newProduct = await service.create(body)
    res.status(201).json({
      message: 'creado',
      data: newProduct
    })
})

router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res) => {
    try{
      const {id } = req.params;
      const body =  req.body;
      const product = await service.update(id, body)
      res.json(
        {
          id,
          message: 'update',
          data: product
        }
      )
    }catch (error){
      res.status(404).json({
        message: error.message
      })
    }

})

router.delete('/:id', async (req, res) => {
  const {id } = req.params;
  const product_delete = await service.delete(id)
  next(error)
})

module.exports = router;
