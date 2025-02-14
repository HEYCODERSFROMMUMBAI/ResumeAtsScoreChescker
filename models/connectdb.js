const dotenv = require('dotenv')
dotenv.config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/atsScoreDB');
        console.log('✅ MongoDB connected successfully');
    } catch (err) {
        console.error('❌ MongoDB connection failed:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
