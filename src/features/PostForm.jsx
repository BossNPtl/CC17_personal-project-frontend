import { useState } from 'react'

import Avatar from '../components/Avatar'
import Button from '../components/Button'

const initialComment = {
    comment: ''
};

export default function PostForm() {
    
    const [input, setInput] = useState(initialComment)

    const handleChangeComment = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    };

    return (
        <div className='bg-gray-300 w-[100%] flex rounded-xl p-3 gap-5'>
            <div className='rounded-full w-[8%] h-[100%] overflow-hidden '>
                <Avatar />
            </div>
            <div className='w-[100%] flex flex-col gap-4'>
                <form >
                    <input
                        className='bg-[#d1d5db] text-black placeholder:text-gray-400 px-2 py-1 
                        active:outline-none active:border-none'
                        placeholder={'What do you think ?'}
                        name='comment'
                        value={input.comment}
                        onChange={handleChangeComment}
                    />
                    <hr className='border-black' />
                    <div className='flex gap-4 justify-end pt-3'>
                        {/* <Button bg='gray' color='white' weight='90'>Cancel</Button> */}
                        <Button bg='gray' color='white' weight='90'>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}