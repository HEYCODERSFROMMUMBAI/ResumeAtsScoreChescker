const mongoose = require('mongoose');

const atsScoreSchema = new mongoose.Schema({
    resumeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resume',
        required: true
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobDescription',
        required: true
    },
    keywordMatchPercentage: Number,
    skillMatchPercentage: Number,
    experienceMatchPercentage: Number,
    educationMatchPercentage: Number,
    totalScore: Number,
    calculatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ATSScore', atsScoreSchema);
