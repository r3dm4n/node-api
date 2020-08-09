const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Product = require('../models/product')

router.get('/', (req, res, next) => {

})

router.post('/', (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  })

  product.save()
    .then(result => {
      res.status(201).json({
        message: `Successfully added new product: ${product.name}`,
        product: product,
        result: result
      })
    })
    .catch(err => res.status(500).json({
      error: {
        message: err.message
      }
    }))
})

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId

  Product.findById(id)
    .exec()
    .then(doc => {
      console.log('doc', doc)
      res.status(200).json(doc)
    })
    .catch(err => res.status(500).json({
      error: {
        message: err.message
      }
    }))
})

router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId
  res.status(200).json({
    message: `Updated product: ${id}`
  })
})

router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId
  res.status(200).json({
    message: `Deleted product: ${id}`
  })
})

module.exports = router
