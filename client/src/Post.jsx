import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://blog-draft-4y1r.onrender.com/api/posts/${slug}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.error("Error fetching post:", err));
  }, [slug]);

  if (!post) {
    return (
      <div className="container mt-4">
        <Link to="/">← Back</Link>
        <p>Loading...</p>
      </div>
    );
  }

  // `post.html` is the markdown turned into HTML by your backend
  return (
    <div className="container mt-4">
      <Link to="/">← Back</Link>
      <h1 className="mt-3">{post.slug}</h1>
      <div
        className="mt-3"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
}

export default Post;
