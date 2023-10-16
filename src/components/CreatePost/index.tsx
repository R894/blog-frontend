import { useState, ChangeEvent, FormEvent } from "react";
import api from "../../api/axios";
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
        <div className="">
          <h2 className="text-2xl mb-4">Create new Post</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div>
              <input
                type="text"
                id="title"
                name="title"
                className="block p-2.5 w-full text-sm focus:outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-600 focus:border-gray-600"
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
                className="block p-2.5 w-full text-sm focus:outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-600 focus:border-gray-600"
                value={formData.content}
                onChange={handleTextAreaChange}
                required
              />
            </div>
            <div className="self-center">
              <button className="btn-primary" type="submit">Create</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreatePost;
