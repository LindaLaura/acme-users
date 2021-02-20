const express = require('express');
const app = express();
const path = require('path');
const faker = require ('faker');

let data = faker.helpers.userCard();
//console.log(data);

app.use('/src', express.static(path.join(__dirname, 'src')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 1337;

app.listen(port, ()=> console.log(`listening on port ${port}`));