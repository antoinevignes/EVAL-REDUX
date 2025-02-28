import { useSelector } from "react-redux";
import { selectPosts } from "../../store/selector/posts-selector";
import { Link } from "react-router";

export default function PostGrid() {
  const posts = useSelector(selectPosts);

  const reversedPosts = [...posts].reverse();

  return (
    <>
      {reversedPosts.length ? (
        <ul className="homepage-list">
          {reversedPosts.map((post, i) => (
            <li key={i}>
              <Link to={`/details/${post.id}`}>
                <h3>{post.title}</h3>
              </Link>

              <p className="author">Auteur : Utilisateur {post.userId}</p>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun post à afficher...</p>
      )}
    </>
  );
}
