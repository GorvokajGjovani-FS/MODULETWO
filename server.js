require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const carRoutes = require('./app/routes/carRoutes');
const manufacturerRoutes = require('./app/routes/manufacturerRoutes');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/myAppDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to my app' });
});

app.use('/api/v1/cars', carRoutes);
app.use('/api/v1/manufacturers', manufacturerRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
