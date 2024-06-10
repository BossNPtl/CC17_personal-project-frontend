import { FontSize, FontWeight } from '../constants/editSource'

import album1 from '../../Asset/Source/Album-2013-Jinsei_x_Boku_=_cover.jpg'
import ListSong from './Album-1-ListSong'
import BoxComment from '../components/BoxComment'

export default function Album1() {
    return (
        <div className='w-[75%] mx-auto flex flex-col justify-center items-center mt-20 '>
            <div className='mb-10 h-[300px] bg-red-200'>
                <img
                    className='h-[100%]'
                    src={album1} alt="album1" />
            </div>
            <div className='mb-10'>
                <p className={`${FontSize[36]} ${FontWeight[1]}`}>
                    Jinsei×Boku=
                </p>
            </div>
            <div className='mb-10'>
                <p>
                    Jinsei×Boku= (จินเซคาเกเตะโบกุวะ) (人生×僕= Jinsei Kakete Boku wa; แปลว่า ชีวิตคูณด้วยฉันเท่ากับ) เป็นสตูดิโออัลบั้มชุดที่ 6 ของวง
                </p>
            </div>
            <div className='w-[100%]'>
                <ListSong />
            </div>

            <div className='mb-10'>
                <p>
                    06/03/2013 release
                </p>
            </div>
            <div className='w-[80%] mb-10'>
                <p className='mb-6'>ความคิดเห็น 0 รายการ</p>
                <BoxComment />
            </div>
        </div>
    )
}