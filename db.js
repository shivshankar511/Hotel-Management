const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://pradhanshankar535:shankar@cluster0.nlkqw.mongodb.net/kodu?retryWrites=true&w=majority&appName=Cluster0'

// Setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('MongoDB connection successful');
});

db.on('error', (err) => {
    console.error('MongoDB connection failed', err);
});

db.on('disconnected', () => {
    console.log('MongoDB connection disconnected');
});

module.exports = db;