const mongoose = require('mongoose');

// Define the Menu schema
const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {    
        type: String,
        enum: ['Salty', 'Sweet', 'Spicy', 'Bitter', 'Umami'],
        required: true
    },
    isdrink: {  
        type: Boolean,
        required: true
    },
    ingredients: {  
        type: [String],
        required: true
    },
    num_sales: {
        type: Number,
        default: 0  
    },
    
});

// Create the Menu model
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;