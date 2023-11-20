const Manufacturer = require('../Manufacturer');
const messages = require('../messages'); // Make sure the path is correct

// Create a new manufacturer
exports.createManufacturer = async (req, res) => {
  try {
    const newManufacturer = new Manufacturer(req.body);
    await newManufacturer.save();
    res.status(201).json({ message: messages.createSuccess, manufacturer: newManufacturer });
  } catch (error) {
    res.status(400).json({ message: messages.createError, error: error.message });
  }
};

// Get all manufacturers
exports.getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find().select('-__v');
    res.status(200).json({ message: messages.getAllSuccess, manufacturers: manufacturers });
  } catch (error) {
    res.status(500).json({ message: messages.getAllError, error: error.message });
  }
};

// Get a manufacturer by ID
exports.getManufacturerById = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id).select('-__v');
    if (!manufacturer) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.status(200).json({ message: messages.getByIdSuccess, manufacturer: manufacturer });
  } catch (error) {
    res.status(500).json({ message: messages.getByIdError, error: error.message });
  }
};

// Update a manufacturer
exports.updateManufacturer = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-__v');
    if (!manufacturer) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.status(200).json({ message: messages.updateSuccess, manufacturer: manufacturer });
  } catch (error) {
    res.status(400).json({ message: messages.updateError, error: error.message });
  }
};

// Delete a manufacturer
exports.deleteManufacturer = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findByIdAndDelete(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.status(200).json({ message: messages.deleteSuccess });
  } catch (error) {
    res.status(500).json({ message: messages.deleteError, error: error.message });
  }
};
