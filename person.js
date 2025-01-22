const mongoose = require('mongoose');
  
// Define the Person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['Student', 'Employee', 'Self-employed', 'chef', 'waiter', 'manager', 'owner'],
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// Create the Person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;

