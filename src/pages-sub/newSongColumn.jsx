import { useState } from "react";
import Input from "../components/Input";

const initailInput = {
    no: '',
    title: '',
    writer: '',
    length: ''
};

export default function SongColumn() {
    const [input, setInput] = useState(initailInput)

    const handleChangeInput = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    };

    return (
        <>
            <tr>
                <td>
                    <Input 
                    placeholder={'No'}
                    name='no'
                    value={input.no}
                    onChange={handleChangeInput}
                    />
                </td>
                <td>
                    <Input 
                    placeholder={'Title'}
                    name='title'
                    value={input.title}
                    onChange={handleChangeInput}
                    />
                </td>
                <td>
                    <Input 
                    placeholder={'Writer'}
                    name='writer'
                    value={input.writer}
                    onChange={handleChangeInput}
                    />
                </td>
                <td>
                    <Input 
                    placeholder={'Length'}
                    name='length'
                    value={input.length}
                    onChange={handleChangeInput}
                    />
                </td>
            </tr>
        </>
    )
}