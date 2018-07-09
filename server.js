const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const items = require('./routes/api/items');

app.use(bodyParser.json());

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



const port = 5000 || process.env.PORT;

app.use('/api/items', items);

app.get('/', (req, res)=>{
    res.send('Fonud main page');
});

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});