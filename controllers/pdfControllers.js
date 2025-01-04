// const Pdf = require('../models/Pdf');
// const path = require('path');
// const fs = require('fs');

// exports.uploadPdf = async (req, res) => {
//   try {
//     const file = req.file;
//     if (!file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     const pdf = new Pdf({
//       name: file.originalname,
//       path: file.path,
//     });

//     await pdf.save();
//     res.status(201).json({ message: 'PDF uploaded successfully', pdf });
//   } catch (error) {
//     res.status(500).json({ message: 'Error uploading PDF', error });
//   }
// };

// exports.getPdfs = async (req, res) => {
//   try {
//     const pdfs = await Pdf.find();
//     res.status(200).json(pdfs);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching PDFs', error });
//   }
// };

// exports.downloadPdf = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const pdf = await Pdf.findById(id);

//     if (!pdf) {
//       return res.status(404).json({ message: 'PDF not found' });
//     }

//     const filePath = path.resolve(pdf.path);
//     res.download(filePath);
//   } catch (error) {
//     res.status(500).json({ message: 'Error downloading PDF', error });
//   }
// };















const Pdf = require('../models/Pdf');
const path = require('path');
const fs = require('fs');

exports.uploadPdf = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const pdf = new Pdf({
      name: file.originalname,
      path: file.path,
    });

    await pdf.save();
    res.status(201).json({ message: 'PDF uploaded successfully', pdf });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading PDF', error });
  }
};

exports.getPdfs = async (req, res) => {
  try {
    const pdfs = await Pdf.find();
    res.status(200).json(pdfs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PDFs', error });
  }
};



exports.downloadPdf = async (req, res) => {
  try {
    const { id } = req.params;
    const pdf = await Pdf.findById(id);

    if (!pdf) {
      return res.status(404).json({ message: 'PDF not found' });
    }

    const filePath = path.resolve(pdf.path.replace(/\\/g, '/')); // Replace \\ with / for cross-platform compatibility
    console.log("File path resolved for download:", filePath); // Log the file path
    res.download(filePath);
  } catch (error) {
    console.error("Download error:", error); // Log any errors
    res.status(500).json({ message: 'Error downloading PDF', error });
  }
};
