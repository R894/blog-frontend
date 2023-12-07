import { useState, ChangeEvent, FormEvent } from "react";
import LoginForm from "../LoginForm";
import apiService from "../../../api/axios";

const RegisterForm = () => {
    interface FormData{
        username: string;
        password: string;
        confirmPassword: string;
        firstName: string;
        lastName: string;
    }

    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
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
        apiService.register(formData.username, formData.password, formData.firstName,formData.lastName)
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
                            type="firstName"
                            id="firstName"
                            name="firstName"
                            placeholder="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="lastName"
                            id="lastName"
                            name="lastName"
                            placeholder="lastName"
                            value={formData.lastName}
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
