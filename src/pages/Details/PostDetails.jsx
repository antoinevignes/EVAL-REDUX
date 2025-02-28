import { Link, useNavigate, useParams } from "react-router";
import { selectPosts } from "../../store/selector/posts-selector";
import "./PostDetails.scss";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchComments, fetchPosts } from "../../store/slice/postSlice";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";

export default function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector(selectPosts);
  const post = posts.find((post) => post.id == id);

  useEffect(() => {
    if (!post) {
      navigate("/");
    }
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
    dispatch(fetchComments(id));
  }, [dispatch, posts.length, id, navigate, post]);

  return (
    <div className="post-container">
      <Link className="link" to={-1}>
        ← Retour
      </Link>

      {post ? (
        <div className="post">
          <div className="post-details">
            <h2>{post.title.toUpperCase()}</h2>
            <p>Auteur : Utilisateur {post.userId}</p>
            <p>{post.body}</p>
          </div>

          <CommentList />

          <CommentForm />
        </div>
      ) : (
        <div>Chargement...</div>
      )}
    </div>
  );
}
