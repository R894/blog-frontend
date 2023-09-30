import { useState, ChangeEvent, FormEvent } from "react";
import api from "../../api/axios";
import CreatePostCSS from "./createpost.module.css";
import Posts from "../Posts/Posts";
import useAuth from "../../hooks/useAuth";

const CreatePost = () => {
  interface FormData {
    title: string;
    content: string;
  }

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const [success, setSuccess] = useState(false);
  const { auth } = useAuth();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    api
      .post(
        "/posts",
        { title: formData.title, content: formData.content },
        { headers: { Authorization: `Bearer ${auth.token}` } }
      )
      .then((res) => {
        console.log(res);
        setSuccess(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {success ? (
        <Posts />
      ) : (
        <div className={CreatePostCSS.div}>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="content"
                id="content"
                name="content"
                placeholder="content"
                value={formData.content}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button type="submit">Create new Post</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreatePost;
