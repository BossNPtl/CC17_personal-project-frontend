/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "../components/Input";

export default function NewSongColumn({ onChange, input }) {

    return (
        <>
            <Input
                placeholder={'No'}
                name='no'
                value={input.no}
                onChange={onChange}
            />
            <Input
                placeholder={'Title'}
                name='title'
                value={input.title}
                onChange={onChange}
            />
            <Input
                placeholder={'Writer'}
                name='writer'
                value={input.writer}
                onChange={onChange}
            />
            <Input
                placeholder={'Length'}
                name='length'
                value={input.length}
                onChange={onChange}
            />
        </>
    )
}