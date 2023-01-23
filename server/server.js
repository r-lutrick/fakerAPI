// IMPORTS
// Express app and config
const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Config
require('./config/mongoose.config')

// Routing
const Routes = require('./routes/faker.route')
Routes(app)

// App listen/run
const port = 8000;
app.listen(port, () => console.log(`The games have begun, please proceed to port:${port}`));