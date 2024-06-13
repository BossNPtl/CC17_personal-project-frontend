/* eslint-disable react/prop-types */

export default function BoxPicBandMember({ picMember, name }) {
    return (
        <div className='bg-blue-300 h-full w-[56%] overflow-hidden rounded-[60px]'>
            <img
                className='w-[100%]'
                src={picMember}
                alt={name} />
        </div>
    )
}