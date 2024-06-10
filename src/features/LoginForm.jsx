import { FontSize, FontWeight } from "../constants/editSource"
import Input from "../components/Input"
import Button from "../components/Button"
import { useState } from "react";

const initailInput = {
    email: '',
    password: ''
};

export default function LoginForm() {
    const [input, setInput] = useState(initailInput);

    const handleChangeInput = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    };

    return (
        <form >
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
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder={'password'}
                        name='password'
                        value={input.password}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <Button size='20' fontType='1' >Login</Button>
                </div>
            </div>
        </form>
    )
}