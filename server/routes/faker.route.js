// Route needs access to controller
const FakerController = require('../controllers/faker.controller')
const fakerModel = require('../models/faker.model')

// URL routes/paths
module.exports = (app) => {
    // app.get("/api/test", FakerController.testAPI)

    // Create
    app.post("/api/create", FakerController.addFaker)

    // // Read
    app.get("/api/getall", FakerController.allFakers) // Display ALL
    app.get("/api/getone/:id", FakerController.oneFaker)  // Display ONE
    
    // // Update
    app.put("/api/update/:id", FakerController.updateFaker)

    // // Delete
    app.delete("/api/delete/:id", FakerController.deleteFaker)
}
