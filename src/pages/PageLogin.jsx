import { Link } from "react-router-dom";
import Button from "../components/Button";
import LoginForm from "../components/LoginForm";


export default function PageLogin() {
    return (
        <div className="mt-48 mx-auto px-8 py-5 rounded-xl bg-black w-[500px] ">
            <LoginForm />
            <hr className="my-7 border w-[75%] mx-auto" />
            <Link to='/auth/register'>
                <Button bg="gray" color="white" size="20">Create new account</Button>
            </Link>
        </div>
    )
}