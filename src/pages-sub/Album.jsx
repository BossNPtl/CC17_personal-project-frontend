import { FontSize, FontWeight } from '../constants/editSource'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import ListSong from './Album-ListSong'
import BoxComment from '../components/BoxComment'
import albumApi from '../apis/album-api';
import PostForm from '../features/PostForm';
import HasComment from '../hooks/hasComment';
import validateCreateComment from '../validators/createComment-validate';

const initialInputPost = {
    message: ''
};

export default function Album() {
    const [album, setAlbum] = useState();
    const { albumId } = useParams();
    const { isComment, fetchComment, createComment, editComment, deleteComment } = HasComment();
    const [inputPost, setInputPost] = useState(initialInputPost);
    const [reset, setReset] = useState(false);

    const Rerender = () => {
        setReset(!reset);
    };

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const res = await albumApi.getAlbum(albumId);
                setAlbum(res.data)
                // console.log(album);
            } catch (err) {
                console.log(err)
            }
        }

        fetchAlbum();
        fetchComment(albumId);
    }, [reset]);
    // console.log(album);
    // console.log(isComment);

    const handleChangeInput = async (event) => {
        setInputPost({ ...inputPost, [event.target.name]: event.target.value })
    }

    const handlePostComment = async (event) => {
        try {
            event.preventDefault();
            const album_id = albumId;
            console.log(album_id, inputPost);
            const failed = validateCreateComment(inputPost);
            if (failed) {
                return console.log(failed);
            }
            await createComment(album_id, inputPost);
            setInputPost(initialInputPost);
            Rerender();

        } catch (err) {
            console.log(err)
        }
    }

    const handleEditPost = async (id, message) => {
        try {
            console.log(id, message)
            await editComment(id, message)
            Rerender();

        } catch (err) {
            console.log(err)
        }
    }

    const handleDeletePost = async (id) => {
        try {
            await deleteComment(id);
            Rerender();
        } catch (err) {
            console.log(err)
        }
    }

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
                <div className='flex gap-2'>
                    <p className='mb-6'>ความคิดเห็น</p>
                    {`${isComment.length}`}
                    <p className='mb-6'>รายการ</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <PostForm onChange={handleChangeInput} inputPost={inputPost} onSubmit={handlePostComment} />
                    {isComment?.map((item) =>
                        <BoxComment
                            key={item.id} item={item}
                            onDelete={() => handleDeletePost(item.id)} onSave={handleEditPost}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}