import PostGrid from "../../components/PostsGrid/PostGrid";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <h1>Posts</h1>

      <PostGrid />
    </div>
  );
}
