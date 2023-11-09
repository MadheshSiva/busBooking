const express = require('express');
const bodyParser = require('body-parser');
const { createData } = require('./busData');
const { busCardGetdatas } = require('./getBusCardDatas');
const {emailService} = require('./emailService')
const cors = require('cors'); // Import the cors package
require('dotenv').config()
const {Payment} = require('./strip')

const app = express();
const PORT = 3060;

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Enable CORS for requests from http://localhost:3000
// Enable CORS for requests from http://localhost:3000/busListing/Coimbatore/Salem
app.use(cors({
  origin: 'http://localhost:3000',
}));


// Router
const Router = express.Router();

const createdData = Router.post('/createData', createData);
app.use('/', createdData);
const serviceSent = Router.post('/emailService', emailService)
app.use('/',serviceSent)
const gotCardDatas = Router.get('/getCardDatas', busCardGetdatas);
app.use('/', gotCardDatas);
const paymentProcess = Router.post('/paymentPage',Payment);
app.use('/',paymentProcess)
app.listen(PORT, () => {
  console.log('Server started');
});

console.log('npm command ---[+ (npm run start) -- script name in package.json +]');
