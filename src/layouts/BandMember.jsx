import BoxBandMember from '../components/BoxBandMember';

import picTaka from '../../Asset/Source/resize/taka_01.jpeg';

export default function BandMember() {
    return (
        <div className='flex flex-col w-[80%] mx-auto pt-10 pb-10 gap-12'>
            <div className='h-[400px] flex justify-between items-center'>
                < BoxBandMember
                    name={'VOCAL: TAKA'}
                    info={'ทากาฮิโระ โมริอูจิ (ญี่ปุ่น: 森内 貴寛; โรมาจิ: Moriuchi Takahiro; เกิดวันที่ 17 เมษายน ค.ศ. 1988)'}
                    class={'boxShadowRight'}
                />
                <div className='bg-blue-300 h-full w-[56%] overflow-hidden rounded-[60px]'>
                    <img 
                    className='w-[100%]'
                    src={picTaka} 
                    alt="picTaka" />
                </div>
            </div>
            <div className='h-[400px] flex justify-between items-center'>
                <div className='bg-blue-300 h-full w-[56%]'>

                </div>
                <div className='bg-red-400 h-[70%] w-[36%] rounded-[40px] '>

                </div>
            </div>
            <div className='h-[400px] flex justify-between items-center'>
                <div className='bg-red-400 h-[70%] w-[36%] rounded-[40px] '>

                </div>
                <div className='bg-blue-300 h-full w-[56%]'>

                </div>
            </div>
            <div className='h-[400px] flex justify-between items-center'>
                <div className='bg-blue-300 h-full w-[56%]'>

                </div>
                <div className='bg-red-400 h-[70%] w-[36%] rounded-[40px] '>

                </div>
            </div>
        </div>
    )
}