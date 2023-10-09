import { useState, ChangeEvent, FormEvent } from "react";
import api from "../../api/axios";
import LoginForm from "../LoginForm/LoginForm";

const RegisterForm = () => {
    interface FormData{
        username: string;
        password: string;
        confirmPassword: string;
        email: string;
    }

    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
    });
    
    const [success, setSuccess] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        api.post('/users', {username: formData.username, password: formData.password, email: formData.email})
            .then((res) => {
                console.log(res)
                setSuccess(true);
            })
            .catch((err) => {console.error(err)})
    }

    return(
        <>
            {success ? <LoginForm/> : (
                <div className="">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            id="username"
                            name="username"
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
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
            )}
        </>
    );
}

export default RegisterForm;
