/* eslint-disable react/prop-types */
import defaultProfilePic from '../../Asset/Source/profile_pic_01.jpg';

export default function Avatar({ src, size = 2.5 }) {
    return (
        <>
            <img
                src={src || defaultProfilePic}
                alt="userProfile"
                style={{ width: `${size}rem`, hight: `${size}rem` }}
                className='rounded-full'
            />
            <p>
                user
            </p>
        </>
    )
}