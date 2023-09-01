// imports
const express = require("express");
const app = express();

require("dotenv").config();

const routers = require("./routes/routes");
const dbConnection = require("./config/database");
const cors = require("cors");

//fetching port
const PORT = process.env.PORT || 5000;

// middleware to parse json request body
app.use(express.json());

const allowedOrigins = [
  "https://visualization-using-d3-frontend.vercel.app/",
  "http://localhost:3000",
];
app.use(
  cors({
    origin: allowedOrigins, // front end path(url) from where the request will be made to the backend or server
    credentials: true,
  })
);

// mounting routes
app.use("/api/v1", routers);

// connecting to the database
dbConnection();

//starting the server
app.listen(PORT, (error) => {
  if (error) console.log(error);
  else console.log(`Listening on ${PORT}`);
});
