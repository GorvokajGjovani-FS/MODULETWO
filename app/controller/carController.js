const Car = require('../Car');
const messages = require('../messages'); 

// Create a new car
exports.createCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    res.status(201).json({ message: messages.createSuccess, car: newCar });
  } catch (error) {
    res.status(400).json({ message: messages.createError, error: error.message });
  }
};

// Get all cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find().populate('manufacturer').select('-__v');
    res.status(200).json({ message: messages.getAllSuccess, cars: cars });
  } catch (error) {
    res.status(500).json({ message: messages.getAllError, error: error.message });
  }
};

// Get a car by ID
exports.getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id).populate('manufacturer').select('-__v');
    if (!car) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.status(200).json({ message: messages.getByIdSuccess, car: car });
  } catch (error) {
    res.status(500).json({ message: messages.getByIdError, error: error.message });
  }
};

// Update a car
exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-__v');
    if (!car) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.status(200).json({ message: messages.updateSuccess, car: car });
  } catch (error) {
    res.status(400).json({ message: messages.updateError, error: error.message });
  }
};

// Delete a car
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.status(200).json({ message: messages.deleteSuccess });
  } catch (error) {
    res.status(500).json({ message: messages.deleteError, error: error.message });
  }
};
