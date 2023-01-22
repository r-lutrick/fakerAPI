// Route needs access to controller
const FakerController = require('../controllers/faker.controller')


// URL routes/paths
// get (read)
module.exports = (app) => {
    app.get("/api/test", FakerController.testAPI)
}

// post (create)
module.exports = (app) => {
    app.post("/api/test", FakerController.createFaker)
}

// put (update)