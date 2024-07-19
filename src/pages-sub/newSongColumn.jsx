/* eslint-disable react/prop-types */
// import { useState } from "react";
import Input from "../components/Input";

export default function NewSongColumn({ onChange, input }) {

    return (
        <div className="w-[100%] grid grid-cols-10">
            <div className="col-span-1 flex justify-start">
                <Input
                    placeholder={'No'}
                    name='no'
                    value={input.no}
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
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
                    onChange={onChange}
                    rounded="none"
                    focus="focus:ring-none"
                    bgColor="gray"
                />
            </div>
        </div>
    )
}