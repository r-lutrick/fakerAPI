const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const database = "FakerDB"

mongoose.connect(`mongodb://127.0.0.1:27017/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Players have been registered: ${database}`))
    .catch(err => console.log('Visa expired: ', err));

