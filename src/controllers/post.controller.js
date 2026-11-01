import { Post } from "../models/post.model.js";

// CREATE - POST /api/v1/posts/create
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age)
      return res.status(400).json({ message: "All fields are required" });
    const post = await Post.create({ name, description, age });
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// READ - GET /api/v1/posts/getPosts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// UPDATE - PATCH /api/v1/posts/update/:id
const updatePost = async (req, res) => {
  try {
    if (Object.keys(req.body || {}).length === 0)
      return res.status(400).json({ message: "No data provided for update" });
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { returnDocument: "after", runValidators: true });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// DELETE - DELETE /api/v1/posts/delete/:id
const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post successfully deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

export { createPost, getPosts, updatePost, deletePost };
