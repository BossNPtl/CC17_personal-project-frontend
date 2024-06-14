import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";
import HasAlbum from "../hooks/hasAlbum";
import NewSongColumn from "./newSongColumn";
import albumApi from "../apis/album-api";
import validateCreateSong from "../validators/createSong-validate";
import UserSignIn from "../hooks/userSignIn";

const initialNewSong = {
    no: '',
    title: '',
    writer: '',
    length: ''
};

export default function ListSong() {
    const { isUser } = UserSignIn();
    const { fetchAllSong, isSong } = HasAlbum();
    const { albumId } = useParams();
    // console.log(albumId);

    const [input, setInput] = useState(initialNewSong)
    const [reset, setReset] = useState(false);

    const Rerender = () => {
        setReset(!reset);
    };

    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    const handleAddButton = (event) => {
        event.preventDefault()
        setAdd(prev => !prev)
    }

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
            <table className="w-[100%] table-auto">
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
                            <td id="td1">{item.no}</td>
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
            </table>
            <form onSubmit={handleSubmitSong} >
                {add &&
                    <NewSongColumn onChange={handleChangeInput} input={input} onSubmit={handleSubmitSong} />
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
                                <Button types="button" weight="150" onClick={() => setAdd(false)}>
                                    Cancel
                                </Button>
                            </>
                        }
                    </div>
                    <div className="flex flex-1 justify-start gap-6">
                        {!edit
                            ?
                            <Button weight="150" onClick={() => setEdit(true)} >
                                Edit
                            </Button>
                            :
                            <>
                                <Button weight="150" onClick={() => setEdit(false)}>
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