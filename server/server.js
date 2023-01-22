const express = require("express");
const app = express();
const port = 8000;

app.listen( port, () => console.log(`The games have begun, please proceed to port:${port}`) );