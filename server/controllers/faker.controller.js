const Faker = require('../models/faker.model')

// Testing
module.exports.testAPI = (req, res) => {
    res.json({Status: "Stage 1, cleared"})
}

// CRUD
// Create
module.exports.createFaker = () => {
    const newFaker = req.body
    Faker.create(newFaker)
    .then(view => res.json(view))
    .catch(err => res.json(err))
}

// Read



// Update



// Delete