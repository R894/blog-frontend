import { useState, ChangeEvent, FormEvent } from "react";
import api from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const CreateComment = () => {
  const { auth } = useAuth();
  const [formData, setFormData] = useState({"content":""});
  const { id } = useParams();

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
        `/comments/${id}`,
        { content: formData.content },
        { headers: { Authorization: `Bearer ${auth.token}` } }
      )
      .then((res) => {
        console.log(res);
        window.location.reload();

      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  return (
    <div className="">
          <h2 className="text-2xl mb-4">Create new Comment</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
  );
};

export default CreateComment;
