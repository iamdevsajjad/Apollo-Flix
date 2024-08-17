import "dotenv/config";
import config from ".";
import app from "./app";

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(config.url);

  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
}

main();
