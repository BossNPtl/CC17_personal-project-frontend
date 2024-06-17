import { FontSize, FontWeight } from '../constants/editSource';
import { useNavigate } from 'react-router-dom';

import MenuBar from './MenuBar';
import LinkOutside from './LinkOutside';
import AuthFunction from './AuthFunction';
import UserSignIn from '../hooks/userSignIn';
import Avatar from '../components/Avatar';
import { useState } from 'react';
import ProfileDropdown from './ProfileDropdown';

export default function Navbar() {
    const { isUser, logout } = UserSignIn();
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    
    const handleLogout = () => {
        logout();
        setOpen(false);
        navigate('/');
    }

    return (
        <header className="flex justify-between items-center bg-black px-32 py-5 fixed w-screen">
            <MenuBar />
            <div className='flex gap-7 items-center text-white relative'>
                {!isUser
                    ? <AuthFunction />
                    : <div
                        role='button' onClick={() => setOpen(prev => !prev)}
                        className='flex items-center gap-4'
                    >
                        <Avatar />
                        {isUser?.['name']}
                    </div>
                }
                {open && <ProfileDropdown setOpen={setOpen} logout={() => handleLogout()}  />
                }

                <p className={`${FontSize[24]} ${FontWeight[2]}`} > | </p>
                <LinkOutside/>
            </div>
        </header>
    )
}
