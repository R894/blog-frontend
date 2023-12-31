import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import apiService from "../../../api/axios";
import Input from "../../../components/UI/Input";

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
    console.log(res.data.message)
    localStorage.setItem("accessToken", res.data.message);
    setAuth({ token: res.data.message || undefined });
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
        <h1 className="text-3xl font-main font-bold">Welcome back!</h1>
        <p>Sign in to get the most out of Nuntium</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-center">
          <div>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit" className="w-full text-xl font-main btn-primary">
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
        <p>Demo user: <b>demo</b> password: <b>demo</b></p>
        <p>No account? <Link className="underline" to="/register">register</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
