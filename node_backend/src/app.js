const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const mongoose = require("mongoose");
const cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

const app = express();
const PORT = process.env.PORT;
const mongoURL = process.env.MongoURL;

// app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions));

// routing section
const usersRoutes = require("./routes/usersRoutes");
const todosRoutes = require("./routes/todosRoutes");
app.use("/users", usersRoutes);
app.use("/todos", todosRoutes);

// db Config
mongoose
  .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Mongodb connection is successful."))
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, console.log(`Server is running at PORT: ${PORT}`));
