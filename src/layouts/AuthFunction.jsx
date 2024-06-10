import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'

const functionAuthList = [
    { id: uuidv4(), title: 'Login', to: '/auth/login' },
    { id: uuidv4(), title: 'Register', to: '/auth/register' },
]

export default function AuthFunction() {
    return (
        <>
            {functionAuthList.map((item) => (
                <Link
                    className='hover:text-gray-400'
                    key={item.id}
                    to={item.to}
                >
                    {item.title}
                </Link>
            ))}
        </>
    )
}