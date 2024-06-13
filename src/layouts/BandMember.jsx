import BoxBandMember from '../components/BoxBandMember';
import BoxPicBandMember from '../components/BoxPicBandMember';

import picTaka from '../../Asset/Source/resize/taka_01.jpeg';
import picToru from '../../Asset/Source/resize/toru_03.jpeg';
import picRyota from '../../Asset/Source/resize/ryota_03.jpeg';
import picTomoya from '../../Asset/Source/resize/tomoya_02.jpeg';

export default function BandMember() {
    return (
        <div className='flex flex-col w-[80%] mx-auto pt-10 pb-10 gap-12'>
            <div className='h-[400px] flex justify-between items-center'>
                < BoxBandMember
                    name={'VOCAL: TAKA'}
                    info={'ทากาฮิโระ โมริอูจิ (ญี่ปุ่น: 森内 貴寛; โรมาจิ: Moriuchi Takahiro; เกิดวันที่ 17 เมษายน ค.ศ. 1988)'}
                />
                < BoxPicBandMember
                    picMember={picTaka}
                    name='Taka'
                />
            </div>
            <div className='h-[400px] flex justify-between items-center'>
                < BoxPicBandMember 
                    picMember={picToru}
                    name='Toru'
                />
                < BoxBandMember 
                name={'GUITAR: TORU'}
                info={'ทากาฮิโระ โมริอูจิ (ญี่ปุ่น: 森内 貴寛; โรมาจิ: Moriuchi Takahiro; เกิดวันที่ 17 เมษายน ค.ศ. 1988)'}
                />
            </div>
            <div className='h-[400px] flex justify-between items-center'>
                < BoxBandMember
                    name={'BASS: RYOTA'}
                    info={'ทากาฮิโระ โมริอูจิ (ญี่ปุ่น: 森内 貴寛; โรมาจิ: Moriuchi Takahiro; เกิดวันที่ 17 เมษายน ค.ศ. 1988)'}
                />
                < BoxPicBandMember
                    picMember={picRyota}
                    name='Ryota'
                />
            </div>
            <div className='h-[400px] flex justify-between items-center'>
                < BoxPicBandMember 
                    picMember={picTomoya}
                    name='Tomoya'
                />
                < BoxBandMember 
                name={'DRUMS: TOMOYA'}
                info={'ทากาฮิโระ โมริอูจิ (ญี่ปุ่น: 森内 貴寛; โรมาจิ: Moriuchi Takahiro; เกิดวันที่ 17 เมษายน ค.ศ. 1988)'}
                />
            </div>

        </div>
    )
}