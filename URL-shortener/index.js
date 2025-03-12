const express = require('express');
const router = require('./routes/url');
const connect = require('./connection');

const PORT = 8000;
const app = express();

// Connect to MongoDB
connect('url-shortener')
  .catch(() => console.error('ERROR : MongoDB not Connected'))
  .then(() => console.log('MongoDB Connected!'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', router);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
