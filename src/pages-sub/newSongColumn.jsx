/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "../components/Input";

export default function NewSongColumn({ onChange, input }) {

    return (
        <div className="w-[100%] flex">
            <div className="w-[10%]">
                <Input
                    placeholder={'No'}
                    name='no'
                    value={input.no}
                    onChange={onChange}
                    rounded="none"
                    focus="focus:ring-none"
                />
            </div>
            <div className="w-[45%]">
                <Input
                    placeholder={'Title'}
                    name='title'
                    value={input.title}
                    onChange={onChange}
                    rounded="none"
                    focus="focus:ring-none"
                />
            </div>
            <div className="w-[35%]">
                <Input
                    placeholder={'Writer'}
                    name='writer'
                    value={input.writer}
                    onChange={onChange}
                    rounded="none"
                    focus="focus:ring-none"
                />
            </div>
            <div className="w-[10%]">
                <Input
                    placeholder={'Length'}
                    name='length'
                    value={input.length}
                    onChange={onChange}
                    rounded="none"
                    focus="focus:ring-none"
                />
            </div>
        </div>
    )
}