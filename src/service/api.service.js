import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const useApi = () => {
  const fetchPosts = async () => {
    return await api.get("/posts");
  };

  const fetchComments = async (id) => {
    return await api.get(`/posts/${id}/comments`);
  };

  const addPost = async () => {
    return api.post("/posts");
  };

  return {
    fetchPosts,
    fetchComments,
    addPost,
  };
};

export default useApi;
