import { FontSize, FontWeight } from "../constants/editSource"
import Button from "./Button";
import Input from "./Input";

export default function RegisterForm() {
    return (
        <form action="">
            <div className="grid gap-5">
                <h1 className={`${FontSize[24]} ${FontWeight[1]} mx-auto text-white`}>
                    Login
                </h1>
                <div>
                    <Input
                        placeholder='email@domain.com'
                    />
                </div>
                <div>
                    <Input
                        placeholder='name'
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder='password'
                    />
                </div>
                <div>
                    <Input
                        type="password"
                        placeholder='confirm password'
                    />
                </div>
                <div>
                    <Button size='20' fontType='1' >Register</Button>
                </div>
            </div>
        </form>
    )
}
