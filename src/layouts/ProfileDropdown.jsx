/* eslint-disable react/prop-types */
import { useState } from 'react';

import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Input from '../components/Input';
import validateRename from '../validators/user-validate';
import userApi from '../apis/user-api';
import UserSignIn from '../hooks/userSignIn';

const initialInputError = {
    name: ''
};

export default function ProfileDropdown({ logout, setOpen }) {

    const { fetchUser, isUser } = UserSignIn();
    const [input, setInput] = useState({name:isUser.name})
    const [edit, setEdit] = useState(false);
    const [inputError, setInputError] = useState(initialInputError);

    const handleOnChange = (event) => {
        setInput(prev => ({...prev, name: event.target.value}))
    }

    const handleCancelEditName = () => {
        setEdit(false)
        setInput({name:isUser.name})
        
    }

    const handleRename = async (event) => {
        try {
            event.preventDefault();
            const failed = validateRename(input)
            if (failed) {
                return setInputError((prev => ({...prev, name: failed})))
            }
            setInputError({ initialInputError });
            if (input.name === isUser.name) {
                return setOpen(prev => !prev);
            } 
            if (!edit) {
                console.log('first')
                return setInput({name:isUser.name})
            }
            await userApi.rename(input)
            fetchUser();
            setOpen(prev => !prev);

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='absolute top-14'>
            <div className='bg-[#464646] p-3 w-[250px] border border-black rounded-xl flex flex-col gap-5'>
                <div className='flex gap-5 items-center '>
                    <div className='flex basis-16'>
                        <Avatar size='3.6' />
                    </div>
                    <div className='flex grow'>
                        {!edit
                            ?
                            <div>
                                {input.name}
                            </div>
                            :
                            <Input
                                placeholder={'name'}
                                name='name'
                                value={input.name}
                                onChange={handleOnChange}
                                error={inputError.name}
                            />
                        }
                    </div>
                </div>
                <div className='flex justify-between h-[20px]'>

                    {!edit
                        ? (
                            <>
                                <Button
                                    weight='65'
                                    onClick={() => setEdit(prev => !prev)}
                                >Edit</Button>
                                <Button
                                    weight='65'
                                    onClick={logout}
                                >Logout</Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    weight='65'
                                    onClick={handleCancelEditName}
                                >Cancel</Button>
                                <Button
                                    weight='65'
                                    onClick={handleRename}
                                >Save</Button>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}