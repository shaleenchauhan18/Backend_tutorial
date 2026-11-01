import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./config/database.js";
import app from "./app.js";

const startServer = async () => {
  await connectDB();
  app.on("error", (err) => {
    console.error("Server error:", err);
    throw err;
  });
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
