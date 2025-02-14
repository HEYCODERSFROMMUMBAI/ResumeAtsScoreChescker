const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    candidateName: String,
    email: String,
    phone: String,
    skills: [String],
    experience: String,
    education: String,
    fileUrl: String,
    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Resume', resumeSchema);
