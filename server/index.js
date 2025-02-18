const express = require("express");
const cors = require("cors");
const fs = require("fs-extra");
const path = require("path");
const marked = require("marked");

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
const BLOGS_DIR = path.join(__dirname, "blogs");

/** 
 * Get request for all blogs
 */
app.get("/api/posts", async (req, res) => {
  try {
    const files = await fs.readdir(BLOGS_DIR);
    const posts = files.map(file => {
      const slug = file.replace(".md", "");
      return { slug, title: slug };
    });
    res.json(posts);
  } catch (error) {
    console.error("Error reading posts:", error);
    res.status(500).json({ error: "Failed to load posts" });
  }
});

/**
 * Get request for one blog
 */
app.get("/api/posts/:slug", async (req, res) => {
  const { slug } = req.params;
  try {
    const filePath = path.join(BLOGS_DIR, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const content = marked.parse(fileContent);
    res.json({ slug, title: slug, content });
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    res.status(404).json({ error: "Post not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});