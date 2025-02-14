
// const express = require('express');
// const Resume = require('../models/resume');
// const upload = require('../middelwares/upload');
// const fs = require('fs');
// const pdfParse = require('pdf-parse');
// const textract = require('textract');
// const parseResume = require('../constants/universalparesr');
// const router = express.Router();

// // POST /api/resumes
// router.post('/', upload.single('resume'), async (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ message: 'No file uploaded' });
//         }

//         let fileContent = '';

//         // Extract text based on file type
//         if (req.file.mimetype === 'application/pdf') {
//             const dataBuffer = fs.readFileSync(req.file.path);
//             const pdfData = await pdfParse(dataBuffer);
//             fileContent = pdfData.text;
//         } else {
//             fileContent = await textract.fromFileWithPath(req.file.path);
//         }

//         // Parse the file content using the universal parser
//         const parsedData = parseResume(fileContent);

//         // Prepare parsed data
//         const resumeData = {
//             candidateName: parsedData.name,
//             email: parsedData.email,
//             phone: parsedData.phone,
//             skills: parsedData.skills,
//             experience: parsedData.experience,
//             education: parsedData.education,
//             fileUrl: `/uploads/${req.file.filename}`
//         };

//         // Save parsed data to the database
//         const newResume = new Resume(resumeData);
//         await newResume.save();

//         res.status(201).json({ message: 'Resume uploaded and parsed successfully', data: newResume });
//     } catch (error) {
//         console.error('Resume parsing failed:', error);
//         res.status(500).json({ message: 'Failed to parse and save resume', error: error.message });
//     }
// });

// module.exports = router;



const express = require('express');
const Resume = require('../models/resume');
const upload = require('../middelwares/upload');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const textract = require('textract');
const parseResume = require('../constants/universalparesr');
const logger = require('../config/logger');

const router = express.Router();

// POST /api/resumes
router.post('/', upload.single('resume'), async (req, res) => {
    try {
        if (!req.file) {
            logger.warn('No file uploaded');
            return res.status(400).json({ message: 'No file uploaded' });
        }

        let fileContent = '';
        logger.info(`Processing file: ${req.file.filename}`);

        // Extract text based on file type
        if (req.file.mimetype === 'application/pdf') {
            const dataBuffer = fs.readFileSync(req.file.path);
            const pdfData = await pdfParse(dataBuffer);
            fileContent = pdfData.text;
        } else {
            fileContent = await textract.fromFileWithPath(req.file.path);
        }

        // Parse the file content
        const parsedData = parseResume(fileContent);

        // Prepare parsed data
        const resumeData = {
            candidateName: parsedData.name,
            email: parsedData.email,
            phone: parsedData.phone,
            skills: parsedData.skills,
            experience: parsedData.experience,
            education: parsedData.education,
            fileUrl: `/uploads/${req.file.filename}`
        };

        // Save parsed data to the database
        const newResume = new Resume(resumeData);
        await newResume.save();

        logger.info('Resume successfully saved to the database');
        res.status(201).json({ message: 'Resume uploaded and parsed successfully', data: newResume });
    } catch (error) {
        logger.error(`Failed to parse and save resume: ${error.message}`);
        res.status(500).json({ message: 'Failed to parse and save resume', error: error.message });
    }
});

module.exports = router;
