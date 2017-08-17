import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const polls = require( './app/routes/poll')
const users= require( './app/routes/user')




const app = express();
const port = process.env.PORT || 8080;


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/votingappdb');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(users,polls);




  
// ...For all the other requests just sends back the Homepage
app.route("*").get((req, res) => {
  res.sendFile('client/dist/index.html', { root: __dirname });
});

app.listen(port);

console.log(`listening on port ${port}`);
