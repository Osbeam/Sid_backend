const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
const errorHandler = require('./middleware/errorMiddleware'); // Import error middleware

dotenv.config(); // Load environment variables from .env file

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON requests

// Routes
app.use('/api/mpsc', userRoutes); // User routes
app.use('/api/pdfs', pdfRoutes); // PDF routes

// Error Handling Middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
