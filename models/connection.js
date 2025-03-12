const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://Admin:iWXonOfQbYs6vrii@cluster0.kvzvm.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
    .then(() => console.log('Database connected'))
    .catch(error => console.error(error));