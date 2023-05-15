const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB connection successful");
    })
    .catch((err) => {
      console.log("db connection issues");
      console.error(err);
      process.exit(1);
    });
};


