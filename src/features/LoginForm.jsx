import { FontSize, FontWeight } from "../constants/editSource"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

import validateLogin from '../validators/login-validate';
import Input from "../components/Input"
import Button from "../components/Button"
import UserSignIn from "../hooks/userSignIn";

const initailInput = {
    email: '',
    password: ''
};

const initailInputError = {
    email: '',
    password: ''
};

export default function LoginForm() {
    const [input, setInput] = useState(initailInput);
    const [inputError, setInputError] = useState(initailInputError);

    const navigate = useNavigate();

    const { login } = UserSignIn();

    const handleChangeInput = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    };

    const handleSubmitForm = async event => {
        try {
            event.preventDefault();
            const failed = validateLogin(input);
            if (failed) {
                return setInputError(failed);
            }
            setInputError({ ...initailInputError });
            // console.log(input);

            await login(input);
            navigate('/')

        } catch (err) {
            console.log(err)

            if (err instanceof AxiosError) {
                const message = err.response.status === 400
                    ? 'Invalid email or password'
                    : 'Internal server error'
                    
                console.log(message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmitForm} >
            <div className="grid gap-5">
                <h1 className={`${FontSize[24]} ${FontWeight[1]} mx-auto text-white`}>
                    Login
                </h1>
                <div>
                    <Input
                        placeholder={'email@domain.com'}
                        name='email'
                        value={input.email}
                        onChange={handleChangeInput}
                        error={inputError.email}
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder={'password'}
                        name='password'
                        value={input.password}
                        onChange={handleChangeInput}
                        error={inputError.password}
                    />
                </div>
                <div>
                    <Button size='20' fontType='1' >Login</Button>
                </div>
            </div>
        </form>
    )
}