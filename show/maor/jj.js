const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const dotenv = require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const dataSchema = new Schema({
    // Define your data schema here
});

const Data = mongoose.model('Data', dataSchema);

const app = express();
app.use(bodyParser.json());

app.get('/data', (req, res) => {
    // Handle GET request to retrieve all data
});

app.get('/data/:id', (req, res) => {
    // Handle GET request to retrieve data by ID
});

app.post('/data', (req, res) => {
    // Handle POST request to create new data
});

app.put('/data/:id', (req, res) => {
    // Handle PUT request to update existing data by ID
});

app.delete('/data/:id', (req, res) => {
    // Handle DELETE request to delete data by ID
});


const jwtCheck = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.JWKS_URI
    }),
    audience: process.env.AUTH0_AUDIENCE,
    issuer: process.env.AUTH0_ISSUER,
    algorithms: ['RS256']
});

app.use(jwtCheck);

app.get('/profile', (req, res) => {
    // Handle GET request to retrieve


