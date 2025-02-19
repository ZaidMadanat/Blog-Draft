import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://blog-draft-4y1r.onrender.com/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="container py-4">
      <ul 
        className="list-group mx-auto" 
        style={{ maxWidth: "600px" }}
      >
        {posts.map((post) => (
          <li
            key={post.slug}
            className="list-group-item mb-3 border rounded"
            style={{ backgroundColor: "#f9f9f9" }}
          >
            <Link
              to={`/${post.slug}`}
              className="text-decoration-none text-center d-block"
              style={{ fontSize: "1.25rem", color: "#333" }}
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;