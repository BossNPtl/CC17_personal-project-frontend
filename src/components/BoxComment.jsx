import profilePic from '../../Asset/Source/profile_pic_01.jpg'
import Button from '../components/Button'

export default function BoxComment() {
    return (
        <div className='bg-gray-300 w-[100%] flex rounded-xl p-3 gap-5'>
            <div className='rounded-full w-[6%] h-[100%] overflow-hidden '>
                <img
                    src={profilePic} alt="profilePic" />
            </div>
            <div className='w-[100%] flex flex-col gap-4'>
                <p>test เทสสสสสสสสสสสสสสสสสสสส test</p>
                <hr className='border-black' />
                <div className='flex gap-4 justify-end'>
                    <Button bg='gray' color='white' weight='90'>Cancel</Button>
                    <Button bg='gray' color='white' weight='90'>Submit</Button>
                </div>
            </div>
        </div>
    )
}