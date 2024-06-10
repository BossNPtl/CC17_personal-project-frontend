import picBand2 from '../../Asset/Source/band-02.jpg'
import logoBandAlpha from '../../Asset/Source/Logo-01-Alpha_B.png'
import BandMember from '../layouts/BandMember'
// import { FontSize, FontWeight } from '../constants/editSource'
import InfoBand from '../layouts/infoBand'

export default function PageAboutUs() {
  return (
    <div className='w-[100%] mx-auto'>
      <div
        className='h-[600px] bg-[center_top_-8.5rem] bg-no-repeat'
        style={{ background: `url(${picBand2})` }}
      >
        {/* <img
          className='max-w-lx relative bottom-[190px] z-[-10]'
          src={picBand2} alt="picBand2" /> */}
      </div>
      {/* <div className='bg-red-400 w-[600px]'>
      <div
        className='h-[40rem] bg-[center_top_-8.5rem] bg-no-repeat bg-white'
        style={{ backgroundImage: `url(${picBand2})` }}
      >
      </div>
</div> */}

      <div
        className='h-[350px] overflow-hidden'
      >
        <img
          className='relative bottom-[200px] z-[-10]'
          src={logoBandAlpha} alt="logoBandBlack" />
      </div>
      <div className='w-[60%] flex mx-auto'>
        <InfoBand />
      </div>
      <BandMember />
    </div>
  )
}
