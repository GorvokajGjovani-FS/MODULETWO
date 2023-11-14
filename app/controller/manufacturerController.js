const Manufacturer = require('../Manufacturer'); // Import Manufacturer model

// Create a new manufacturer
exports.createManufacturer = async (req, res) => {
  try {
    const newManufacturer = new Manufacturer(req.body);
    await newManufacturer.save();
    res.status(201).json(newManufacturer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all manufacturers
exports.getAllManufacturers = async (req, res) => {
  try {
    const manufacturers = await Manufacturer.find();
    res.status(200).json(manufacturers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a manufacturer by ID
exports.getManufacturerById = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findById(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    res.status(200).json(manufacturer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a manufacturer
exports.updateManufacturer = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    res.status(200).json(manufacturer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a manufacturer
exports.deleteManufacturer = async (req, res) => {
  try {
    const manufacturer = await Manufacturer.findByIdAndDelete(req.params.id);
    if (!manufacturer) {
      return res.status(404).json({ message: 'Manufacturer not found' });
    }
    res.status(200).json({ message: 'Manufacturer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
