import { Link } from 'react-router-dom'
import { useState } from 'react'

// import album1 from '../../Asset/Source/Album-2013-Jinsei_x_Boku_=_cover.jpg'
import ModalCreateAlbum from '../layouts/Modal-CreateAlbum'
import Modal from '../components/modal';
import HasAlbum from '../hooks/hasAlbum';
import albumApi from '../apis/album-api';
import { useEffect } from 'react';

export default function PageAlbum() {
  const { isAlbum, setIsAlbum } = HasAlbum();

  useEffect(() => {
    const fetchAllAlbum = async () => {
      try {
        const res = await albumApi.getAllAlbum();
        setIsAlbum(res.data)
        // console.log('res -->', res)
        // console.log('res.data -->', res.data)
      } catch (err) {
        console.log(err)
      }
      console.log(isAlbum);
    }
    fetchAllAlbum();
  }, []);
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

        <div
          role='button' onClick={() => setOpen(true)}
          className='h-[250px] w-[250px] mx-auto bg-gray-200 flex justify-center items-center'>
          <div className='h-[100px] w-[100px] mx-auto bg-gray-300 border border-black'>

          </div>
        </div>
        <Modal
          title='Create Album'
          width={60}
          open={open} onClose={() => setOpen(false)}
        >
          <ModalCreateAlbum onSuccess={() => setOpen(false)} />
        </Modal>

      </div>
    </div>
  )
}
