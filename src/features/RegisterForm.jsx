import { useState } from "react";
import { FontSize, FontWeight } from "../constants/editSource"
import { useNavigate } from "react-router-dom";
import { AxiosError } from 'axios';

import validateRegister from "../validators/register-validate";
import authApi from '../apis/auth-api';
import Button from "../components/Button";
import Input from "../components/Input";

const initialInput = {
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
};

const initialInputError = {
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
};

export default function RegisterForm() {
    const [input, setInput] = useState(initialInput);
    const [inputError, setInputError] = useState(initialInputError);

    const navigate = useNavigate();

    const handleChangeInput = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    };

    const handleSubmitForm = async event => {
        try {
            event.preventDefault();
            const failed = validateRegister(input);
            if (failed) {
                return setInputError(failed);
            }
            setInputError({ ...initialInputError });
            await authApi.register(input);
            navigate('/auth/login');

        } catch (err) {
            console.log(err);
            if (err instanceof AxiosError) {
                if (err.response.data.field === 'email')
                    setInputError(prev => ({ ...prev, email: 'email already in use.' }));
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmitForm}
        >
            <div className="grid gap-5">
                <h1 className={`${FontSize[24]} ${FontWeight[1]} mx-auto text-white`}>
                    Register
                </h1>
                <div>
                    <Input
                        placeholder='email@domain.com'
                        name='email'
                        value={input.email}
                        onChange={handleChangeInput}
                        error={inputError.email}
                    />
                </div>
                <div>
                    <Input
                        placeholder='name'
                        name='name'
                        value={input.name}
                        onChange={handleChangeInput}
                        error={inputError.name}
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder='password'
                        name='password'
                        value={input.password}
                        onChange={handleChangeInput}
                        error={inputError.password}
                    />
                </div>
                <div>
                    <ol className="text-gray-400 text-sm type">
                        <li>
                            <p>ใช้ได้แค่ตัวอักษรภาษาอังกฤษและตัวเลข</p>
                            <p>มีความยาวอย่างน้อย 8 ตัวอักษร</p>
                        </li>
                    </ol>
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder='confirm password'
                        name='confirmPassword'
                        value={input.confirmPassword}
                        onChange={handleChangeInput}
                        error={inputError.confirmPassword}
                    />
                </div>
                <div>
                    <Button size='20' fontType='1' >Register</Button>
                </div>
            </div>
        </form>
    )
}
