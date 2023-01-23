const mongoose = require('mongoose');

// Create database collections/table (called collections in MongoDB)
const FakerSchema = new mongoose.Schema({
    // attribute: instructions/validations
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [2, "Name must be at least 2 characters"]
    },
    age: {
        type: Number,
        required: [true, "Age required"],
        min: [18, "Must be 18+"]
    },
    suspect: {
        type: Boolean
        // required: [false]
    }
}, {timestamps: true})

module.exports = mongoose.model("Faker", FakerSchema)
