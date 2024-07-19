import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";
import HasAlbum from "../hooks/hasAlbum";
// import NewSongColumn from "./newSongColumn";
import albumApi from "../apis/album-api";
import validateCreateSong from "../validators/createSong-validate";
import userSignIn from "../hooks/userSignIn";
import Input from "../components/Input";

const initialNewSong = {
    no: '',
    title: '',
    writer: '',
    length: ''
};

const initialInputEditSong = {
    no: '',
    title: '',
    writer: '',
    length: ''
};

export default function ListSong() {
    const { isUser } = userSignIn();
    const { fetchAllSong, isSong } = HasAlbum();
    const { albumId } = useParams();
    // console.log(albumId);

    const [input, setInput] = useState(initialNewSong);
    const [reset, setReset] = useState(false);
    const [inputEditSong, setInputEditSong] = useState(initialInputEditSong);

    const Rerender = () => {
        setReset(!reset);
    };

    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);
    const [editSong, setEditSong] = useState(false);
    console.log('edit -->>', edit);
    console.log('editSong -->>', editSong);

    const handleAddButton = (event) => {
        event.preventDefault()
        setAdd(prev => !prev)
        if (!add) {
            setInput(initialNewSong);
        }
    };

    const handleOpenEditButton = (event) => {
        event.preventDefault()
        setEdit(true)
    };

    const handleCloseEditButton = (event) => {
        event.preventDefault()
        setEdit(false)
        setEditSong(false);
        setInputEditSong(initialInputEditSong);
    };

    const handleEditSongButton = (event) => {
        event.preventDefault()
        setEditSong(prev => !prev)

    };

    useEffect(() => {
        fetchAllSong(albumId)
    }, [reset])

    const handleChangeInput = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    };

    const handleSubmitSong = async (event) => {
        try {
            event.preventDefault();
            console.log(input)
            const failed = validateCreateSong(input);
            if (failed) {
                return console.log(failed)
            }
            await albumApi.createSong(albumId, input);
            setAdd(false);
            setInput(initialNewSong);
            Rerender();

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='w-[100%]'>
            {/* <table className="w-[100%] table-auto">
                <thead>
                    <tr className="bg-black text-white">
                        <th className="w-[5%]">No.</th>
                        <th id="th2">Title</th>
                        <th id="th3" className="w-[35%]">Writer</th>
                        <th className="w-[10%]">Length</th>
                    </tr>
                </thead>
                <tbody>
                    {isSong?.map((item) =>
                        <tr key={item.id}>
                            <td id="td1">{item.no}.</td>
                            <td id="td2">{item.title}</td>
                            <td id="td3">{item.writer}</td>
                            <td id="td4">{item.length}</td>
                            {edit ?
                                <>
                                    <td id="tdButton"><Button>Save</Button></td>
                                    <td><Button>Delete</Button></td>
                                </>
                                : null}
                        </tr>
                    )}
                </tbody>
            </table> */}
            <div className="bg-black text-white grid grid-cols-10 p-2">
                <div className="col-span-1 flex justify-start">No.</div>
                <div className="col-span-5 flex justify-start">Title</div>
                <div className="col-span-3 flex justify-start">Writer</div>
                <div className="col-span-1 flex justify-center">Length</div>
            </div>
            {isSong?.map((item, index) =>
                <div key={item.id}>
                    <div
                        className={`grid grid-cols-10 p-2 relative
                    ${index % 2 === 0 ? 'bg-[#D0D0D0] text-black' : 'bg-[#9B9B9B] text-white'}`}>
                        <div className="col-span-1 flex justify-start">{item.no}.</div>
                        <div className="col-span-5 flex justify-start">{item.title}</div>
                        <div className="col-span-3 flex justify-start">{item.writer}</div>
                        <div className="col-span-1 flex justify-center ">{item.length}</div>
                        <div className={`flex gap-2 absolute ${edit && editSong ? '-right-36' : '-right-14' }`}>
                            {
                                edit && !editSong
                                    ? <Button onClick={handleEditSongButton}>Edit</Button> :
                                    edit && editSong ?
                                        <>
                                            <Button>Save</Button>
                                            <Button>Delete</Button>
                                        </>
                                        : ''
                            }
                        </div>
                    </div>
                </div>
            )}
            <form onSubmit={handleSubmitSong} >
                {add &&
                    // <NewSongColumn onChange={handleChangeInput} input={input} />
                    <div className="w-[100%] grid grid-cols-10">
                        <div className="col-span-1 flex justify-start">
                            <Input
                                placeholder={'No'}
                                name='no'
                                value={input.no}
                                onChange={handleChangeInput}
                                rounded="none"
                                focus="focus:ring-none"
                                bgColor="gray"
                            />
                        </div>
                        <div className="col-span-5 flex justify-start">
                            <Input
                                placeholder={'Title'}
                                name='title'
                                value={input.title}
                                onChange={handleChangeInput}
                                rounded="none"
                                focus="focus:ring-none"
                                bgColor="gray"
                            />
                        </div>
                        <div className="col-span-3 flex justify-start">
                            <Input
                                placeholder={'Writer'}
                                name='writer'
                                value={input.writer}
                                onChange={handleChangeInput}
                                rounded="none"
                                focus="focus:ring-none"
                                bgColor="gray"
                            />
                        </div>
                        <div className="col-span-1 flex justify-start">
                            <Input
                                placeholder={'Length'}
                                name='length'
                                value={input.length}
                                onChange={handleChangeInput}
                                rounded="none"
                                focus="focus:ring-none"
                                bgColor="gray"
                            />
                        </div>
                    </div>
                }
                {isUser?.['isAdmin'] ?
                    <div className="pt-3 flex justify-center gap-6">
                        <div className="flex flex-1 justify-end gap-6">
                            {!add
                                ?
                                <Button type="button" weight="150" onClick={handleAddButton}>
                                    Add
                                </Button>
                                :
                                <>
                                    <Button weight="150" onClick={handleSubmitSong}>
                                        Save
                                    </Button>
                                    <Button types="button" weight="150" onClick={handleAddButton}>
                                        Cancel
                                    </Button>
                                </>
                            }
                        </div>
                        <div className="flex flex-1 justify-start gap-6">
                            {!edit
                                ?
                                <Button weight="150" onClick={handleOpenEditButton} >
                                    Edit
                                </Button>
                                :
                                <>
                                    <Button weight="150" onClick={handleCloseEditButton}>
                                        Cancel
                                    </Button>
                                    <Button weight="150">
                                        Save
                                    </Button>
                                </>
                            }
                        </div>
                    </div>
                    : null}
            </form>
        </div >
    )
}