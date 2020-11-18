require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose Connection ERROR: " + err.message);
});

mongoose.connection.once("open", () => {
  console.log("MongoDB Connected!");
});

//require of user model
require("./models/User");

const port = process.env.PORT
const app = require("./app");

app.listen(port || 8000, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

