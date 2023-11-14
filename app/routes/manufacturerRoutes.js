const express = require('express');
const router = express.Router();

const manufacturerController = require('../controller/manufacturerController');

// POST 
router.post('/', manufacturerController.createManufacturer);

// GET request to retrieve all manufacturers
router.get('/', manufacturerController.getAllManufacturers);

// GET request to retrieve a single manufacturer by ID
router.get('/:id', manufacturerController.getManufacturerById);

// PUT 
router.put('/:id', manufacturerController.updateManufacturer);

// DELETE 
router.delete('/:id', manufacturerController.deleteManufacturer);

module.exports = router;
