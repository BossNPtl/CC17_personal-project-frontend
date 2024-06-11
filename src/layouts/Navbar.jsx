import { FontSize, FontWeight } from '../constants/editSource';

import MenuBar from './MenuBar';
import LinkOutside from './LinkOutside';
import AuthFunction from './AuthFunction';
import UserSignIn from '../hooks/userSignIn';
import Avatar from '../components/Avatar';

export default function Navbar() {
    const { isUser } = UserSignIn()

    return (
        <header className="flex justify-between items-center bg-black px-32 py-5 fixed w-screen">
            <MenuBar />
            <div className='flex gap-7 items-center text-white'>
                {!isUser
                    ? <AuthFunction />
                    : <Avatar />
                }

                <p className={`${FontSize[24]} ${FontWeight[2]}`} > | </p>
                <LinkOutside />
            </div>
        </header>
    )
}
