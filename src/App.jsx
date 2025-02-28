import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import PostDetails from "./pages/Details/PostDetails";
import AddPostPage from "./pages/AddPostPage/AddPostPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPosts } from "./store/slice/postSlice";
import Nav from "./components/Nav/Nav";
import ErrorPage from "./pages/Error/ErrorPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/details/:id" element={<PostDetails />} />
        <Route path="/add" element={<AddPostPage />} />
      </Routes>
    </>
  );
}

export default App;
