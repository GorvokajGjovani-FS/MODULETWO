const express = require('express');
const router = express.Router();

const carController = require('../controller/carController');

// POST 
router.post('/', carController.createCar);

// GET - Retrieve all cars
router.get('/', carController.getAllCars);

// GET - Retrieve a single car by ID
router.get('/:id', carController.getCarById);

// PUT 
router.put('/:id', carController.updateCar);

// DELETE 
router.delete('/:id', carController.deleteCar);

module.exports = router;
