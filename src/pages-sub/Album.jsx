import { FontSize, FontWeight } from '../constants/editSource'
import { useEffect } from 'react';

import ListSong from './Album-ListSong'
import BoxComment from '../components/BoxComment'
import albumApi from '../apis/album-api';
import { useParams } from 'react-router-dom';
import PostForm from '../features/PostForm';
import { useState } from 'react';

export default function Album() {
    // const { isAlbum, setIsAlbum } = HasAlbum();
    const [album, setAlbum] =useState()
    const { albumId } = useParams()

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const res = await albumApi.getAlbum(albumId);
                setAlbum(res.data)
                console.log(album);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAlbum();
    }, []);
    // console.log(album);

    return (
        <div className='w-[75%] mx-auto flex flex-col justify-center items-center mt-20 '>
            <div className='mb-10 h-[300px] bg-red-200'>
                <img
                    className='h-[100%]'
                    src={album?.picture_album} alt='album picture' />
            </div>
            <div className='mb-10'>
                <p className={`${FontSize[36]} ${FontWeight[1]}`}>
                    {album?.name}
                </p>
            </div>
            <div className='mb-10'>
                <p>
                    {album?.description}
                </p>
            </div>
            <div className='w-[100%] mb-6'>
                <ListSong />
            </div>
            <div className='mb-10'>
                <p>
                    {album?.release} release
                </p>
            </div>
            {!album?.picture_band
                ? null :
                <div className='mb-10 h-[300px] bg-red-200'>
                    <img
                        className='h-[100%]'
                        src={album?.picture_band} alt={album.picture_band} />
                </div>}
            <div className='w-[80%] mb-10'>
                <p className='mb-6'>ความคิดเห็น 0 รายการ</p>
                <div className='flex flex-col gap-6'>
                    <PostForm />
                    <BoxComment />
                </div>
            </div>
        </div>
    )
}