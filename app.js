const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(
    'mongodb://localhost:27017/expressjsstater'
).then(() => {
    console.log('Connect mongodb successfull');
}).catch((error) => {
    consol.log('Can not connect to moongoose');
})

const app = express();

const userRoute = require('./routes/user');

// Middleware

app.use(logger('dev'));
app.use(bodyParser.json())

app.use('/users', userRoute)

// Routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Ok'
    })
})


// Catch error route status

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

// handle error

app.use((req, res, next) => {
    return 
})


const port = app.get('port') || 5000;

app.listen(port, () => console.log(`Server is listening on port: ${port}`))