import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addComment } from "../../store/slice/postSlice";
import { selectComments } from "../../store/selector/posts-selector";

export default function CommentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const comments = useSelector(selectComments);

  const dispatch = useDispatch();

  const handleChange = (e, param) => {
    const { value } = e.target;
    switch (param) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
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
    if (name.trim() === "" || email.trim() == "" || body.trim() === "") {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }
    dispatch(
      addComment({
        postId: parseInt(id),
        id: Math.max(...comments.map((comment) => comment.id)) + 1,
        name: name,
        email: email,
        body: body,
      })
    );
    setName("");
    setEmail("");
    setBody("");
    setMessage("Commentaire ajouté avec succès !");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        <textarea
          name="comment"
          id="comment"
          placeholder="Ajouter un commentaire"
          value={body}
          onChange={(e) => handleChange(e, "body")}
        ></textarea>
        <button type="submit">Ajouter</button>
      </form>

      {message && <p>{message}</p>}
    </>
  );
}
