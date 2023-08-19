// imports
const express = require("express");
const app = express();

require("dotenv").config();

const routers = require("./routes/routes");
const dbConnection = require("./config/database");

//fetching port
const PORT = process.env.PORT || 5000;

// middleware to parse json request body
app.use(express.json());

// mounting routes
app.use("/api/v1", routers);

// connecting to the database
dbConnection();

//starting the server
app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`Listening on ${PORT}`);
});
