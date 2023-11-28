import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const apiService = {
  // getComment gets comments by postId
  getComments: async (postId: number) => {
    return api
      .get(`/comments/post/${postId}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error("Error fetching comments:", error);
        throw error;
      });
  },

  createComment: async (postId: number, content: string, token: string) => {
    return api
      .post(
        `/comments/post/${postId}`,
        { content: content },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  },

  createPost: async (title: string, content: string, filePath: string, token: string) => {
    return api
      .post(
        `/posts`,
        { title: title, content: content, filePath: filePath },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  },

  viewPosts: async (page?: number) => {
    return api
      .get(page ? `/posts/page/${page}` : `/posts`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  },

  viewPost: async (postId: number) => {
    return api
      .get(`/posts/view/${postId}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  },

  login: async (username: string, password: string) => {
    return api.post(`/login`, { username, password });
  },

  uploadFile: async (file: File) => {
    const form = new FormData();
    form.append('file', file)
    return api
      .post(`/upload`, form)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  },
};
export default apiService;
