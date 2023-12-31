import { useState, ChangeEvent, FormEvent } from "react";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import apiService from "../../../api/axios";
import UploadFile from "../../UploadFile";

const CreatePost = () => {
  interface FormData {
    title: string;
    content: string;
  }

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const [uploadResponse, setUploadResponse] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const { auth } = useAuth();
  const navigate = useNavigate();

  const handleUploadSuccess = (responseMessage: string) => {
    setUploadResponse(responseMessage);
  };

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
    if (auth.token === undefined) {
      return;
    }

    apiService
      .createPost(formData.title, formData.content, uploadResponse || "none", auth.token)
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
        navigate("/posts")
      ) : (
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
            <UploadFile onUploadSuccess={handleUploadSuccess}/>
            {uploadResponse && <p>Upload Response: {uploadResponse}</p>}
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
              <button className="btn-primary" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default CreatePost;
