import { v4 as uuidv4 } from 'uuid'
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../icons/AllIcon';

const linkList = [
    { id: uuidv4(), title: <FacebookIcon width='30' />, to: 'https://www.facebook.com/privacy/consent/inline/?flow=acv_fb_consent_debut_2nd&source=facebook_comet.fb_ig_1st_time_3pd_consent_flow_new_user' },
    { id: uuidv4(), title: <InstagramIcon width='35' />, to: 'https://www.instagram.com/oneokrockofficial/' },
    { id: uuidv4(), title: <YoutubeIcon width='40' />, to: 'https://www.youtube.com/user/ONEOKROCKchannel' },
]

export default function LinkOutside() {
    return (
        <>
            {linkList.map((item) => (
                <a
                    href={item.to}
                    key={item.id}
                >
                    {item.title}
                </a>
            ))}
        </>
    )
}