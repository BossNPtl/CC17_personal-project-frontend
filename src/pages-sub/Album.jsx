import { FontSize, FontWeight } from '../constants/editSource'
import { useEffect } from 'react';

import ListSong from './Album-ListSong'
import BoxComment from '../components/BoxComment'
import HasAlbum from '../hooks/hasAlbum';
import albumApi from '../apis/album-api';
import { useParams } from 'react-router-dom';

export default function Album() {
    const { isAlbum, setIsAlbum } = HasAlbum();
    const { albumId } = useParams()

    // console.log('albumId --->', albumId);

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                // console.log('%%%%%%%%%%%$$$$$$$$$$');
                // console.log('albumId --->', albumId);
                const res = await albumApi.getAlbum(albumId);
                setIsAlbum(res.data)
            } catch (err) {
                console.log(err)
            }
            // console.log(isAlbum);
        }
        fetchAlbum();
    }, []);
    // console.log(isAlbum);

    return (
        <div className='w-[75%] mx-auto flex flex-col justify-center items-center mt-20 '>
            <div className='mb-10 h-[300px] bg-red-200'>
                <img
                    className='h-[100%]'
                    src={isAlbum?.picture_album} alt='album picture' />
            </div>
            <div className='mb-10'>
                <p className={`${FontSize[36]} ${FontWeight[1]}`}>
                    {isAlbum?.name}
                </p>
            </div>
            <div className='mb-10'>
                <p>
                    {isAlbum?.description}
                </p>
            </div>
            <div className='w-[100%] mb-6'>
                <ListSong />
            </div>
            <div className='mb-10'>
                <p>
                    {isAlbum?.release} release
                </p>
            </div>
            {!isAlbum?.picture_band
                ? null :
                <div className='mb-10 h-[300px] bg-red-200'>
                <img
                    className='h-[100%]'
                    src={isAlbum?.picture_band} alt={isAlbum.picture_band} />
            </div>}
            <div className='w-[80%] mb-10'>
                <p className='mb-6'>ความคิดเห็น 0 รายการ</p>
                <BoxComment />
            </div>
        </div>
    )
}