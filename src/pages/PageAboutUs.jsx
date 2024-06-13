import picBand2re from '../../Asset/Source/resize/band-02.jpeg'
import logoBand from '../../photos/logo/Logo-Alpha-B.png'

import InfoBand from '../layouts/infoBand'
import BandMember from '../layouts/BandMember'

export default function PageAboutUs() {
  return (
    <div className='w-[100%] mx-auto'>
      <div>
        <img
          src={picBand2re}
          alt="picBand2"
        />
      </div>
      <div
        className='w-[60%] mx-auto pt-[50px] pb-[50px]'
      >
        <img src={logoBand}
          alt="logoBandAlpha-B" />
      </div>
      <div className='w-[60%] flex mx-auto pb-[30px]'>
        <InfoBand />
      </div>
      <BandMember />
    </div>
  )
}
