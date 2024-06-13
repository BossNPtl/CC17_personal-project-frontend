/* eslint-disable react/prop-types */

import Button from "../components/Button";
import Input from "../components/Input";

export default function ModalCreateAlbum() {
    return (
        <>
            {/* <div className="w-[70%] bg-[#464646] border border-black flex flex-col p-3"> */}
            <div className="flex flex-1 gap-4">
                <div className="w-[50%] pb-6 text-white flex flex-col gap-1">
                    <p>Album name :</p>
                    <Input
                        placeholder={'Album name'}
                    />
                    <p className="pt-4">Album picture :</p>
                    <Input
                        type="file"
                    />
                    <p className="pt-4">Band picture :</p>
                    <Input
                        type="file"
                    />
                </div>
                <div className="w-[50%] text-white flex flex-col gap-1 ">
                    <p>Description :</p>
                    <textarea
                        className="block w-full rounded-2xl p-2 bg-gray-400 text-gray-800 "
                        rows={5}
                        name="" id="">

                    </textarea>
                    <p className="pt-4">Release :</p>
                    <Input
                        placeholder={'DD/MM/YYYY'}
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
            {/* </div> */}
        </>
    )
}