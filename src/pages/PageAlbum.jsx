import { Link } from 'react-router-dom'
import { useState } from 'react'

import ModalCreateAlbum from '../layouts/Modal-CreateAlbum'
import Modal from '../components/modal';
import HasAlbum from '../hooks/hasAlbum';
import userSignIn from '../hooks/userSignIn';

export default function PageAlbum() {
  const { isAlbum, deleteAlbum } = HasAlbum();
  const { isUser } = userSignIn();

  const [open, setOpen] = useState(false);

  const handleDeleteAlbum = async (albumId) => {
    try {
      await deleteAlbum(albumId)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-[100%] pb-20'>
      <div className='w-[60%] mx-auto mt-20 grid grid-cols-2 gap-20 '>
        {isAlbum?.map((item) =>
          <div className='relative' key={item.id}>
            <Link
              to={`/album/${item.id}`}
              className='h-[250px] w-[250px] mx-auto'>
              <img
                className='h-full aspect-square w-full'
                src={item["picture_album"]} alt={item.id} />
            </Link>
            {isUser?.['isAdmin'] ?
              <div
                role='button' onClick={() => handleDeleteAlbum(item.id)}
                className='absolute z-10 top-0 right-0 text-xl w-8 h-8 bg-white m-2 rounded-full'>
                <div className='flex justify-center w-full h-full items-center text-red-600 inset-0'>
                  &#10005;
                </div>
              </div>
              : null}
          </div>
        )}

        {isUser?.['isAdmin'] ?
          < div
            role='button' onClick={() => setOpen(true)}
            className='h-[250px] w-[250px] mx-auto my-auto bg-gray-200 flex justify-center items-center'>
            <div className='h-[100px] w-[100px] mx-auto bg-gray-300 border border-black'>
              <div className='flex justify-center items-center rotate-45 h-full text-4xl font-extrabold'>
                &#10005;
              </div>
            </div>
          </div>
          : null}
        <Modal
          title='Create Album'
          width={60}
          open={open} onClose={() => setOpen(false)}
        >
          <ModalCreateAlbum onSuccess={() => setOpen(false)} />
        </Modal>

      </div>
    </div >
  )
}
