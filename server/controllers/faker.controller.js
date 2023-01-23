const Faker = require('../models/faker.model')


// Testing
module.exports.testAPI = (req, res) => {
    res.json({Status: "Stage 1, cleared"})
}

// CRUD
// Create
module.exports.addFaker = (req, res) => {
    const newFaker = req.body
    Faker.create(newFaker)
    .then(view => res.json(view))
    .catch(err => res.json(err))
}

// Get all
module.exports.allFakers = (req, res) => {
    Faker.find()
    .then(fakers => res.json(fakers))
    .catch(err => res.json(err))
}

// Get one
module.exports.oneFaker = (req, res) => {
    const idParam = req.params.id
    Faker.findOne({_id: idParam})
    .then(faker => res.json(faker))
    .catch(err => res.json(err))
}

// Update
module.exports.updateFaker = (req, res) => {
    const idParam = req.params.id
    const newValue = req.body
    Faker.findOneAndUpdate({_id: idParam}, newValue, {new: true})
    .then(newData => res.json(newData))
    .catch(err => res.json(err))
}

// Delete
module.exports.deleteFaker = (req, res) => {
    Faker.deleteOne({_id: req.params.id})
    .then(message => res.json(message))
    .catch(err => res.json(err))
}