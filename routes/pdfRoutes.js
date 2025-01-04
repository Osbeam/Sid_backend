// const express = require('express');
// const multer = require('multer');
// const { uploadPdf, getPdfs, downloadPdf } = require('../controllers/pdfControllers');
// const authMiddleware = require('../middleware/authMiddleware');

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: './uploads/',
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`);
//   },
// });

// const upload = multer({ storage });

// // Routes
// router.post('/upload', upload.single('pdf'), uploadPdf); // Protected route
// router.get('/getPdf', getPdfs); // Public route
// router.get('/download/:id', downloadPdf); // Public route

// module.exports = router;












const express = require('express');
const multer = require('multer');
const { uploadPdf, getPdfs, downloadPdf } = require('../controllers/pdfControllers');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
router.post('/upload', upload.single('pdf'), uploadPdf); // Protected route
router.get('/getPdf', getPdfs); // Public route
router.get('/download/:id', downloadPdf); // Updated route to use 'id' instead of 'id'

module.exports = router;
