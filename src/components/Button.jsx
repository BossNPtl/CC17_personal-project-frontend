/* eslint-disable react/prop-types */
const bgColor = {
    white: 'bg-white hover:bg-[#E6E6E6]',
    gray: 'bg-gray-500 hover:bg-gray-400',
    lightGray: 'bg-gray-200 hover:bg-gray-300'
}

const textColor = {
    black: 'text-black',
    gray: 'text-gray-400',
    white: 'text-white'
}

const buttonWeight = {
    full: 'w-full',
    90: 'w-[90px]',
    65: 'w-[65px]',
    150: 'w-[150px]'
}

const fontStyle = {
    0: "font-normal",
    1: "font-semibold",
    2: "font-extrabold"
}

const textSize = {
    16: 'text-base',
    20: 'text-xl',
    24: 'text-2xl'
}

export default function Button({ children, bg = 'white', color = 'black', weight = 'full', fontType = 0, size = 16, onClick }) {
    return (
        <button
        className={`
        px-3 py-1.5 font- rounded-lg ${bgColor[bg]} ${textColor[color]} ${buttonWeight[weight]} ${fontStyle[fontType]} ${textSize[size]}
        flex items-center justify-center
        `}
        onClick={onClick}
        type='submit'
        >
            {children}
        </button>
    )
}