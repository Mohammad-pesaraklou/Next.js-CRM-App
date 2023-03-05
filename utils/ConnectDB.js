const { default: mongoose } = require("mongoose");

async function ConnectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.DB_URI);
  console.log("Connected to db");
}

export default ConnectDB;
