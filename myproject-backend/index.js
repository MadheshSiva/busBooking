const express = require('express');
const bodyParser = require('body-parser');
const { createData } = require('./busData');
const { busCardGetdatas } = require('./getBusCardDatas');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 3060;

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Enable CORS for requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000', // Replace with the actual frontend URL
}));

// Router
const Router = express.Router();

const createdData = Router.post('/createData', createData);
app.use('/', createdData);

const gotCardDatas = Router.get('/getCardDatas', busCardGetdatas);
app.use('/', gotCardDatas);

app.listen(PORT, () => {
  console.log('Server started');
});

console.log('npm command ---[+ (npm run start) -- script name in package.json +]');
