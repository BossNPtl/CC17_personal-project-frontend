import { FontSize, FontWeight } from "../constants/editSource"
import Input from "../components/Input"
import Button from "./Button"

export default function LoginForm() {
    return (
        <form >
            <div className="grid gap-5">
                <h1 className={`${FontSize[24]} ${FontWeight[1]} mx-auto text-white`}>
                    Login
                </h1>
                <div>
                    <Input
                        placeholder={'email@domain.com'}
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder={'password'}
                    />
                </div>
                <div>
                    <Button size='20' fontType='1' >Login</Button>
                </div>
            </div>
        </form>
    )
}