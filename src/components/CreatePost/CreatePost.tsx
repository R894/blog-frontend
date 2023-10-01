import { useState, ChangeEvent, FormEvent } from "react";
import api from "../../api/axios";
import CreatePostCSS from "./createpost.module.css";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
      {success ? 
        navigate("/posts")
       : (
        <div className={CreatePostCSS.div}>
          <h2>Create new Post</h2>
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
              <textarea
                id="content"
                name="content"
                placeholder="content"
                value={formData.content}
                onChange={handleTextAreaChange}
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
