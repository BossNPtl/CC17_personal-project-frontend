// import { FontSize, FontWeight } from '../constants/editSource'

import picBand2re from '../../Asset/Source/resize/band-02.jpeg'
import logoBandAlphaReBlack from '../../Asset/Source/resize/Logo-Alpha_B.png'
import BandMember from '../layouts/BandMember'
import InfoBand from '../layouts/infoBand'

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
        <img src={logoBandAlphaReBlack}
          alt="logoBandAlpha-B" />
      </div>
      <div className='w-[60%] flex mx-auto pb-[30px]'>
        <InfoBand />
      </div>
      <BandMember />
    </div>
  )
}
