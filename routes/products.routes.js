const express = require('express');
const router = express.Router();
const {createProduct, deleteProduct, updateProduct, fetchAllProduct, fetchSingleProduct} = require('../controllers/products.controllers')

router.get('/', fetchAllProduct);
router.get('/:id',fetchSingleProduct);
router.put('/:id', updateProduct);
router.post('/',createProduct);
router.delete('/:id', deleteProduct);

module.exports = router;