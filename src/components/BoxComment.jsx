import { FontSize, FontWeight } from '../constants/editSource'

import Button from '../components/Button'
import UserSignIn from '../hooks/userSignIn'
import Avatar from './Avatar'

export default function BoxComment() {
    const { isUser } = UserSignIn()
    
    return (
        <div className='bg-gray-300 w-[100%] flex rounded-xl p-3 gap-5'>
            <div className='rounded-full w-[8%] h-[100%] overflow-hidden '>
                <Avatar />
            </div>
            <div className='w-[100%] flex flex-col gap-4'>
                <p className={`${FontSize[20]} ${FontWeight[1]}`}>{isUser?.name}</p>
                <p>test เทสสสสสสสสสสสสสสสสสสสส test</p>
                <hr className='border-black' />
                <div className='flex gap-4 justify-end'>
                    {/* <Button bg='gray' color='white' weight='90'>Cancel</Button> */}
                    <Button bg='gray' color='white' weight='90'>Submit</Button>
                </div>
            </div>
        </div>
    )
}