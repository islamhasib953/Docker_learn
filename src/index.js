const express = require('express');
// const mongoose = require('mongoose');

const app = express();
const port = 3001;
// const port =process.env.port || 4000;       // here to can port is enviaroment variable

app.get('/', (req, res) =>
  res.send('<h1>Hello islam hasib@@#@@#$$</h1>'));

app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
})


// const DB_USER = 'root';
// const DB_PASSWORD = 'example';
// const DB_PORT = 27017;
// const DB_HOST = 'mongo';
// const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

// mongoose.connect(URI).then(() => console.log("Connect with database")).catch((err) => console.log("failed to connect with database", err));

app.use(express.json());
