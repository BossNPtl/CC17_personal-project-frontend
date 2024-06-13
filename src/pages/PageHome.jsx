import poster1 from '../../Asset/Source/TourPoster-2024-01.jpg'
import poster4 from '../../Asset/Source/resize/TourPoster-MakeItOutAlive.jpg'
import poster5 from '../../Asset/Source/resize/TourPoster-LuxurySisease.jpg'

export default function PageHome() {
  return (
    <div className='w-[100%] pb-10'>
      <div className='w-[100%] bg-[#0e1d0a]'>
        <img
        className='mx-auto w-[50%]' 
        src={poster1} 
        alt="poster1" />
      </div>
      <div className='w-[100%]'>
        <img 
        src={poster4} 
        alt="poster4" />
      </div>
      <div className='w-[100%]'>
        <img 
        src={poster5} 
        alt="poster5" />
      </div>
    </div>
  )
}
