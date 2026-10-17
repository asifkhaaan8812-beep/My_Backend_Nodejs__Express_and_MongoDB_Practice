import express from "express";
import mongoose from "mongoose";
let conn = await mongoose.connect("mongodb://localhost:27017/todo");
const router = express.Router();

router.get("/", (req, res) => {
  const todo = new todo({
    title: "hey first todo",
    desc: "Description of this todo",
    isDone: "false",
  });
  todo.save();
  res.send(`<h1>hello my name is asif and this is the main page</h1> `);
});

export default router;
