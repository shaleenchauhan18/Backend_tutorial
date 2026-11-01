import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

app.use(express.json()); // parse JSON request bodies

// Route declarations
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

app.get("/", (req, res) => res.send("Server is running 🚀"));

export default app;
