import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import apiService from "../../../api/axios";

const LoginForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();

  interface FormData {
    username: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    apiService.login(formData.username, formData.password)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.message);
        setAuth(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-3 text-center w-80">
        <h1 className="text-3xl">Welcome back!</h1>
        <p>Sign in to get the most out of Nuntium</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-center">
          <div>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full h-14 p-3 rounded-lg"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full h-14 p-3 rounded-lg"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit" className="w-full h-14 border-2 rounded-lg border-black">
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
