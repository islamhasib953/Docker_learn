const express = require('express');
// const mongoose = require('mongoose');
const redis = require('redis');

const Client  = require('pg');
const app = express();
// const port = 3001;
const port =process.env.port || 4000;       // here to can port is enviaroment variable


app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
});


//connect to redis
// const REDIS_PORT = 6379;
// const REDIS_HOST = 'redis';
// const redisClient = redis.createClient({
//   url: `redis://${REDIS_HOST}:${REDIS_PORT}`
// });
// redisClient.on('error', (err) => console.log('Redis Client Error', err));
// redisClient.on('connect', () => console.log('connected to database redis....'));
// redisClient.connect();

// connect to db mongo
// const DB_USER = 'root';
// const DB_PASSWORD = 'example';
// const DB_PORT = 27017;
// const DB_HOST = 'mongo';
// const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
// mongoose.connect(URI).then(() => console.log("Connect with database")).catch((err) => console.log("failed to connect with database", err));


// connect to posgres
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 5432;
const DB_HOST = 'postgres';
const URI = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
const client = new Client({
  connectionString: URI,
});
client
  .connect()
  .then(() => console.log("Connect with postgres database"))
  .catch((err) => console.log("failed to connect with postgres database", err));



app.get('/', (req, res) => {
  // redisClient.set('products', 'products...');  //test to store in moemory this using redis
  res.send('<h1>Hello islam hasib@@#@@#$$</h1>');});

// app.get('/data', async (req, res) => {
//   const products = await redisClient.get('products');   //to get data from memory using redis

//   res.send(`<h1>Hello islam hasib@@#@@</h1> <h2>${products} <\h2>`);
// });

app.use(express.json());

