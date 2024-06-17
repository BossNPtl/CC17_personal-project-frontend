/* eslint-disable react/prop-types */
// import { useState } from 'react'

import Avatar from '../components/Avatar'
import Button from '../components/Button'

export default function PostForm({ onChange, inputPost, onSubmit }) {
    

    return (
        <div className='bg-gray-300 w-[100%] flex rounded-xl p-3 gap-5'>
            <div className='rounded-full w-[8%] h-[100%] overflow-hidden '>
                <Avatar />
            </div>
            <div className='w-[100%] flex flex-col gap-4'>
                <form onSubmit={onSubmit} >
                    <input
                        className='bg-[#d1d5db] text-black placeholder:text-gray-400 px-2 py-1 w-full 
                        focus:outline-none focus:border-none'
                        placeholder={'What do you think ?'}
                        name='message'
                        value={inputPost.message}
                        onChange={onChange}
                    />
                    <hr className='border-black' />
                    <div className='flex gap-4 justify-end pt-3'>
                        <Button bg='gray' color='white' weight='90'
                        onClick={onSubmit}
                        >Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}