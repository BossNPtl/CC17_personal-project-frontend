import { FontSize, FontWeight } from '../constants/editSource'

import Button from '../components/Button'
import UserSignIn from '../hooks/userSignIn'
import Avatar from './Avatar'
import { useState } from 'react'

export default function BoxComment({ item }) {
    const { isUser } = UserSignIn()
    const [edit, setEdit] = useState(false);

    // console.log(item)

    return (
        <div className='bg-gray-300 w-[100%] flex rounded-xl p-3 gap-5'>
            <div className='rounded-full w-[8%] h-[100%] overflow-hidden '>
                <Avatar />
            </div>
            <div className='w-[100%] flex flex-col gap-4'>
                <p className={`${FontSize[20]} ${FontWeight[1]}`}>{item?.name}</p>
                <p>{item?.message}</p>
                <hr className='border-black' />
                <div className='flex gap-4 justify-end'>
                    {/* {isUser?.id === item?.['user_id'] ? */}
                    {!edit
                        ?
                        <>
                            <Button bg='gray' color='white' weight='90'
                                onClick={() => setEdit(!edit)}
                            >Edit</Button>
                            <Button bg='gray' color='white' weight='90'>Delete</Button>
                        </>
                        :
                        <>
                            <Button bg='gray' color='white' weight='90'
                                onClick={() => setEdit(!edit)}
                            >Cancel</Button>
                            <Button bg='gray' color='white' weight='90'>Submit</Button>
                        </>
                    }
                    {/* : null} */}
                </div>
            </div>
        </div>
    )
}