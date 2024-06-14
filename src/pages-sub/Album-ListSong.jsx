import { useState } from "react";
import Button from "../components/Button";

export default function ListSong() {
    const [edit, setEdit] = useState(false);
    // console.log(edit)
    const [add, setAdd] = useState(false);
    // console.log(add)

    // const handleAddNewColumn = (event) => {

    // }

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
                    <tr>
                        <td id="td1">1.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                        {/* <td><Button>Save</Button></td> */}
                        {/* <td><Button>Delete</Button></td> */}
                    </tr>
                    <tr>
                        <td id="td1">2.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                    </tr>
                    <tr>
                        <td id="td1">3.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                    </tr>
                    <tr>
                        <td id="td1">4.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                    </tr>
                    <tr>
                        <td id="td1">5.</td>
                        <td id="td2">Introduction Where Idiot Should Go</td>
                        <td id="td3">Takahiro</td>
                        <td id="td4">1:12</td>
                    </tr>
                </tbody>
            </table>
            <div className="pt-3 flex justify-center gap-6">
                <div className="flex flex-1 justify-end gap-6">
                    {!add
                        ?
                        <Button
                            weight="150"
                            onClick={() => setAdd(true)}
                        >
                            Add
                        </Button>
                        :
                        <>
                            <Button
                                weight="150"
                            >
                                Save
                            </Button>
                            <Button
                                weight="150"
                                onClick={() => setAdd(false)}
                            >
                                Cancel
                            </Button>
                        </>
                    }
                </div>
                <div className="flex flex-1 justify-start gap-6">
                    {!edit
                        ?
                        <Button
                            weight="150"
                            onClick={() => setEdit(true)} >
                            Edit
                        </Button>
                        :
                        <>
                            <Button
                                weight="150"
                                onClick={() => setEdit(false)}
                            >
                                Cancel
                            </Button>
                            <Button
                                weight="150"
                            >
                                Save
                            </Button>
                        </>
                    }
                </div>

            </div>
        </div>
    )
}