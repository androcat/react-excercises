import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import BlogForm from "./components/BlogForm/BlogForm";
import ContactList from "./components/ContactList/ContactList";
import BlogList from "./components/BlogApp/BlogList";

function App() {
  const [posts, setPost] = useState([]);
  const [selection, setSelection] = useState("a");
  const [persons, setPerson] = useState([]);

  const addPerson = (person) => {
    setPerson([...persons, person]);
  };
  const addPost = (post) => {
    setPost([post, ...posts]);
  };

  return (
    <div className="container mt-5">
      <header>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => setSelection("a")}
        >
          Blog Form
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => setSelection("b")}
        >
          Contact List
        </button>
        <button
          className="btn btn-link"
          type="button"
          onClick={() => setSelection("c")}
        >
          Blog List
        </button>
      </header>
      {selection === "a" && <BlogForm addPost={addPost} />}
      {selection === "b" && (
        <ContactList addPerson={addPerson} persons={persons} />
      )}
      {selection === "c" && <BlogList />}
    </div>
  );
}

export default App;
