/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "../components/Input";

export default function NewSongColumn({ onChange, input }) {

    return (
        <>
            {/* <form onSubmit={onSubmit}> */}
                {/* <tr> */}
                    {/* <td> */}
                        <Input
                            placeholder={'No'}
                            name='no'
                            value={input.no}
                            onChange={onChange}
                        />
                    {/* </td> */}
                    {/* <td> */}
                        <Input
                            placeholder={'Title'}
                            name='title'
                            value={input.title}
                            onChange={onChange}
                        />
                    {/* </td> */}
                    {/* <td> */}
                        <Input
                            placeholder={'Writer'}
                            name='writer'
                            value={input.writer}
                            onChange={onChange}
                        />
                    {/* </td> */}
                    {/* <td> */}
                        <Input
                            placeholder={'Length'}
                            name='length'
                            value={input.length}
                            onChange={onChange}
                        />
                    {/* </td> */}
                {/* </tr> */}
            {/* </form> */}
        </>
    )
}