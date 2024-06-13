/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
// import { AxiosError } from "axios";
import validateCreateAlbum from "../validators/createAlbum-validate";
import HasAlbum from "../hooks/hasAlbum";

const initailInput = {
    name: '',
    picture_album: '',
    picture_band: '',
    description: '',
    release: ''
};

const initailInputError = {
    name: '',
    picture_album: '',
    description: ''
    // picture_band: '',
    // release: ''
};

export default function ModalCreateAlbum() {
    /*
    const date = "12/06/2024"
    const dateTime = new Date(date)
    console.log(dateTime);
    */
   const { createAlbum } = HasAlbum()
   
    const [input, setInput] = useState(initailInput);
    const [inputError, setInputError] = useState(initailInputError);
    // console.log(input)
    const handleChangeInput = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    };

    const handleSubmitForm = async (event) => {
        try {
            event.preventDefault();
            const failed = validateCreateAlbum(input);
            if (failed) {
                return setInputError(failed);
            }
            setInputError({ ...initailInputError });
            // console.log('%%%%%%%%%%%%%%%%%%%%%%%%%')
            await createAlbum(input);
            
        } catch (err) {
            console.log(err)
            // if (err instanceof AxiosError) {
            //     const message = err.response.status === 400
            //         ? 'Fill all input.'
            //         : 'Internal server error'
            //     console.log(message);
            // }
        }
    }

    return (
        <>
            {/* <div className="w-[70%] bg-[#464646] border border-black flex flex-col p-3"> */}
            <form onSubmit={handleSubmitForm} >
                <div className="flex flex-1 gap-4">
                    <div className="w-[50%] pb-6 text-white flex flex-col gap-1">
                        <p>Album name :</p>
                        <Input
                            placeholder={'Album name'}
                            name='name'
                            onChange={handleChangeInput}
                            value={input.name}
                            error={inputError.name}
                        />
                        <p className="pt-4">Album picture :</p>
                        <Input
                            // type="file"
                            name='picture_album'
                            onChange={handleChangeInput}
                            value={input.picture_album}
                            error={inputError.picture_album}
                        />
                        <p className="pt-4">Band picture :</p>
                        <Input
                            // type="file"
                            name="picture_band"
                            onChange={handleChangeInput}
                            value={input.picture_band}
                            // error={inputError.picture_band}
                        />
                    </div>
                    <div className="w-[50%] text-white flex flex-col gap-1 ">
                        <p>Description :</p>
                        <textarea
                            className="block w-full rounded-2xl p-2 bg-gray-400 text-gray-800 "
                            rows={5}
                            name="description"
                            onChange={handleChangeInput}
                            value={input.description}
                        // error={inputError.description}
                        >

                        </textarea>
                        <p className="pt-4">Release :</p>
                        <Input
                            placeholder={'DD/MM/YYYY'}
                            name="release"
                            onChange={handleChangeInput}
                            value={input.release}
                            // error={inputError.release}
                        />
                    </div>
                </div>
                <div>
                    <Button
                        fontType={1} size={20}
                    >
                        Submit
                    </Button>
                </div>
            </form>
            {/* </div> */}
        </>
    )
}