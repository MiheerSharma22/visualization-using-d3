const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch(() => console.log("Error connecting to Db"));

module.exports = dbConnection;
