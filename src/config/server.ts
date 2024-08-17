import "dotenv/config";
import app from "./app";

const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DB_URL);

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
}

main();
