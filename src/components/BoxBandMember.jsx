/* eslint-disable react/prop-types */
import { FontSize, FontWeight } from "../constants/editSource"

export default function BoxBandMember({ name, info }) {
    return (
        <div 
        className={`bg-black text-white h-[70%] w-[36%] rounded-[40px] 
        p-5 flex flex-col gap-4 justify-center 
        
        `}>
            <h1 className={`${FontSize[36]} ${FontWeight[2]}`}>
                {name}
            </h1>
            <p className={`${FontSize[16]}`}>
                {info}
            </p>
        </div>
    )
}