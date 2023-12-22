const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");

// the various paths inports
const userAuthRoute = require('./Route/userAuthRoute');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => {app.listen(process.env.PORT), console.log("App is listerning")})
  .catch(error => console.error(error))

app.use('/api/school', userAuthRoute);

