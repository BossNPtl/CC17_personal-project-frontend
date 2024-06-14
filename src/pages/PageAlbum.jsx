import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { useEffect } from 'react';

import ModalCreateAlbum from '../layouts/Modal-CreateAlbum'
import Modal from '../components/modal';
import HasAlbum from '../hooks/hasAlbum';
import UserSignIn from '../hooks/userSignIn';
// import albumApi from '../apis/album-api';

export default function PageAlbum() {
  const { isAlbum } = HasAlbum();
  const { isUser } = UserSignIn();

  // const [reset, setReset] = useState(false);
  // const Rerender = () => setReset(!reset);

  console.log(isAlbum);

  const [open, setOpen] = useState(false);

  return (
    <div className='w-[100%] pb-20'>
      <div className='w-[60%] mx-auto mt-20 grid grid-cols-2 gap-20 '>
        {isAlbum?.map((item) =>
          <Link
            key={item.id}
            to={`/album/${item.id}`}
            className='h-[250px] w-[250px] mx-auto'>
            <img
              className='h-[100%]'
              src={item["picture_album"]} alt={item.id} />
          </Link>
        )}

        {isUser?.['isAdmin'] ?
          < div
            role='button' onClick={() => setOpen(true)}
            className='h-[250px] w-[250px] mx-auto bg-gray-200 flex justify-center items-center'>
            <div className='h-[100px] w-[100px] mx-auto bg-gray-300 border border-black'>
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
