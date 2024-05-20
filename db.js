
const mongoose = require("mongoose");


// Database connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}
