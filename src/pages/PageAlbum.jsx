import { Link } from 'react-router-dom'

import album1 from '../../Asset/Source/Album-2013-Jinsei_x_Boku_=_cover.jpg'

export default function PageAlbum() {
  return (
    <div className='w-[100%]'>
      <div className='w-[60%] mx-auto mt-20 grid grid-cols-2 gap-20 '>
        <Link 
        to='/album/1'
        className='h-[250px] w-[250px] mx-auto'>
          <img
            className='h-[100%]'
            src={album1} alt="album1" />
        </Link>
        <Link 
        to='/'
        className='h-[250px] w-[250px] mx-auto'>
          <img
            className='h-[100%]'
            src={album1} alt="album1" />
        </Link>
        <Link 
        to='/'
        className='h-[250px] w-[250px] mx-auto'>
          <img
            className='h-[100%]'
            src={album1} alt="album1" />
        </Link>
        <Link 
        to='/'
        className='h-[250px] w-[250px] mx-auto'>
          <img
            className='h-[100%]'
            src={album1} alt="album1" />
        </Link>
      </div>
    </div>
  )
}
