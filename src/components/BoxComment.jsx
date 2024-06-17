/* eslint-disable react/prop-types */
import { FontSize, FontWeight } from '../constants/editSource'


import Button from '../components/Button'
import UserSignIn from '../hooks/userSignIn'
import Avatar from './Avatar'
import { useState } from 'react'

export default function BoxComment({ item, onDelete, onSave }) {
    const { isUser } = UserSignIn()

    const [edit, setEdit] = useState(false);
    const [inputChangeMes, setInputChangeMes] = useState(item?.message)

    const handleOnChangeMes = (event) => {
        setInputChangeMes(event.target.value)
    }

    const onClickSave = () => {
        onSave(item.id, inputChangeMes);
        setEdit(!edit);
    }

    return (
        <div className='bg-gray-300 w-[100%] flex rounded-xl p-3 gap-5'>
            <div className='rounded-full w-[8%] h-[100%] overflow-hidden '>
                <Avatar />
            </div>
            <div className='w-[100%] flex flex-col gap-4'>
                <p className={`${FontSize[20]} ${FontWeight[1]}`}>{item?.user?.name}</p>
                {!edit ?
                    <p>{item?.message}</p>
                    :
                    <form >
                        <input
                            className='bg-[#d1d5db] text-black placeholder:text-gray-400 px-2 py-1 w-full 
                focus:outline-none focus:border-none'
                            placeholder={'What do you think ?'}
                            name='message'
                            value={inputChangeMes}
                            onChange={handleOnChangeMes}
                        />
                    </form>
                }
                <hr className='border-black' />
                <div className='flex gap-4 justify-end'>
                    {(isUser?.id === item?.user?.id) ?
                        <>
                            {!edit
                                ?
                                <>
                                    <Button bg='gray' color='white' weight='90'
                                        type='button'
                                        onClick={() => setEdit(!edit)}
                                    >Edit</Button>
                                    <Button bg='gray' color='white' weight='90'
                                        onClick={onDelete}
                                    >Delete</Button>
                                </>
                                :
                                <>
                                    <Button bg='gray' color='white' weight='90'
                                        type='button'
                                        onClick={() => setEdit(!edit)}
                                    >Cancel</Button>
                                    <Button bg='gray' color='white' weight='90'
                                        onClick={onClickSave}
                                    >Submit</Button>
                                </>
                            }
                        </>
                        : null}
                </div>
            </div>
        </div>
    )
}