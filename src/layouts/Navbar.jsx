// import P from '../components/P';
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../icons/AllIcon';
import { FontSize, FontWeight } from '../constants/editSource';
import { LogoBand } from '../components/LogoBand';
// import PageLogin from '../layouts/PageLogin'
// import PageRegister from '../layouts/PageRegister'

const menuList = [
    { id: uuidv4(), title: 'HOME', to: '/' },
    { id: uuidv4(), title: 'ALBUMS', to: '/album' },
    { id: uuidv4(), title: 'ABOUT US', to: '/aboutUs' },
]

const linkList = [
    { id: uuidv4(), title: <FacebookIcon width='30' />, to: 'https://www.facebook.com/privacy/consent/inline/?flow=acv_fb_consent_debut_2nd&source=facebook_comet.fb_ig_1st_time_3pd_consent_flow_new_user' },
    { id: uuidv4(), title: <InstagramIcon width='35' />, to: 'https://www.instagram.com/oneokrockofficial/' },
    { id: uuidv4(), title: <YoutubeIcon width='40' />, to: 'https://www.youtube.com/user/ONEOKROCKchannel' },
]

const functionAuthList = [
    { id: uuidv4(), title: 'Login', to:'/auth/login' },
    { id: uuidv4(), title: 'Register', to:'/auth/register' },
]

export default function Navbar() {
    return (
        <header className="flex justify-between items-center bg-black px-32 py-5 fixed w-screen">
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
            <div className='flex gap-7 items-center text-white'>
                {functionAuthList.map((item) => (
                    <Link
                    className='hover:text-gray-400'
                        key={item.id}
                        to={item.to}
                    >
                        {item.title}
                    </Link>
                ))}
                <p className={`${FontSize[24]} ${FontWeight[2]}`} > | </p>
                {linkList.map((item) => (
                    <a
                        href={item.to}
                        key={item.id}
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </header>
    )
}
