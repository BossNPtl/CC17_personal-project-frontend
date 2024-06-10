import { useState } from "react";
import { FontSize, FontWeight } from "../constants/editSource"
import Button from "../components/Button";
import Input from "../components/Input";

const initailInput = {
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
};

export default function RegisterForm() {
    const [input, setInput] = useState(initailInput);
    
    const handleChangeInput = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    
    return (
        <form action="">
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
                    />
                </div>
                <div>
                    <Input
                        placeholder='name'
                        name='name'
                        value={input.name}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder='password'
                        name='password'
                        value={input.password}
                        onChange={handleChangeInput}
                    />
                </div>
                <div>
                    <ol className="text-gray-400 text-sm type">
                        <li>
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
                    />
                </div>
                <div>
                    <Button size='20' fontType='1' >Register</Button>
                </div>
            </div>
        </form>
    )
}
