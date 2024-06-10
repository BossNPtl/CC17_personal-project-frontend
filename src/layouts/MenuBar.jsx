import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { LogoBand } from '../components/LogoBand';

const menuList = [
    { id: uuidv4(), title: 'HOME', to: '/' },
    { id: uuidv4(), title: 'ALBUMS', to: '/album' },
    { id: uuidv4(), title: 'ABOUT US', to: '/aboutUs' },
]

export default function MenuBar() {
    return (
        <div className="flex gap-10 items-center text-white">
            <Link to='/'>
                <LogoBand />
            </Link>
            {menuList.map((item) => (
                <Link
                    className='text-white text-xl font-extrabold hover:text-gray-400'
                    key={item.id}
                    to={item.to}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    )
}