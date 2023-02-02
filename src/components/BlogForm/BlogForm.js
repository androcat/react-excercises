import { useState } from "react";

function BlogForm({ addPost }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
    };

    addPost(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <form className="blogForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" name="url" className="form-label">
          Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Blog post
        </label>
        <textarea
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
          className="form-control"
          rows="3"
          placeholder="lorem ipsum.."
        ></textarea>
      </div>
      <button type="submit">Add post</button>
    </form>
  );
}

export default BlogForm;
