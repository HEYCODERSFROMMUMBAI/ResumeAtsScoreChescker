const mongoose = require('mongoose');

const jobDescriptionSchema = new mongoose.Schema({
    jobTitle: String,
    skillsRequired: [String],
    experienceRequired: String,
    educationRequired: String,
    postedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('JobDescription', jobDescriptionSchema);
