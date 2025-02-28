import { useSelector } from "react-redux";
import { selectComments } from "../../store/selector/posts-selector";

export default function CommentList() {
  const comments = useSelector(selectComments);

  return (
    <>
      <h3>Commentaires</h3>
      {comments.length ? (
        <ul>
          {comments.map((comment, i) => (
            <li key={i}>
              <h4>{comment.name}</h4>
              <h5>{comment.email}</h5>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-comment">Aucun commentaire...</p>
      )}
    </>
  );
}
