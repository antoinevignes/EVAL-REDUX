import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../store/slice/postSlice";
import { selectPosts } from "../../store/selector/posts-selector";
import "./AddPostPage.scss";

export default function AddPostPage() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const posts = useSelector(selectPosts);

  const dispatch = useDispatch();

  const handleChange = (e, param) => {
    const { value } = e.target;
    switch (param) {
      case "title":
        setTitle(value);
        break;
      case "body":
        setBody(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || body.trim() === "") {
      setMessage("Veuillez remplir tous les champs");
      return;
    }

    dispatch(
      addPost({
        userId: 11,
        id: Math.max(...posts.map((post) => post.id)) + 1,
        title: title,
        body: body,
      })
    );

    setTitle("");
    setBody("");
    setMessage("Article ajouté avec succès !");
  };

  return (
    <div className="post-page">
      <h2>Ajouter un post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre du post"
          value={title}
          onChange={(e) => handleChange(e, "title")}
        />
        <textarea
          name="body"
          id="body"
          placeholder="Article..."
          value={body}
          onChange={(e) => handleChange(e, "body")}
        ></textarea>
        <button type="submit">Ajouter</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
