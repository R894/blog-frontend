import { useState, ChangeEvent, FormEvent } from "react";
import LoginForm from "../LoginForm";
import apiService from "../../../api/axios";
import Input from "../../../components/UI/Input";

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
                <h2 className="font-main font-bold text-3xl text-center pb-5">Register</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
                    <Input
                            type="password"
                            id="confirmPassword"
                            name="confirmpassword"
                            placeholder="Confirm password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="firstName"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <Input
                            type="lastName"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit" className="w-full text-xl font-main btn-primary">Register</button>
                    </div>
                </form>
            </div>
            )}
        </>
    );
}

export default RegisterForm;
