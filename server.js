const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = JSON.stringify(process.env.DATABASE).replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// connecting DB
mongoose
  .connect(JSON.parse(DB))
  .then(() => console.log("db connected successfully"));

const port = process.env.PORT || 5000;

// Starting the server
app.listen(port, () =>
  console.log(`server running at http://localhost:${port}`)
);
