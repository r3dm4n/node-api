const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'handling get req to /products'
  })
})

router.post('/', (req, res, next) => {
  const product = {
    name: req.body.name,
    price: req.body.price
  }

  res.status(201).json({
    message: 'handling post req to /products',
    createdProduct: product
  })
})

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId
  res.status(200).json({
    message: id
  })
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
