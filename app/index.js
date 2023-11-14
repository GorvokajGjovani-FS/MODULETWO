// const express = require('express');
// const mongoose = require('mongoose');
// const carRoutes = require('./routes/carRoutes');
// const manufacturerRoutes = require('./routes/manufacturerRoutes');

// const app = express();

// // Middleware to parse JSON bodies
// app.use(express.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/myAppDatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// // Base route for homepage
// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Welcome to my app' });
// });

// // Routes
// app.use('/api/v1/cars', carRoutes);
// app.use('/api/v1/manufacturers', manufacturerRoutes);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
