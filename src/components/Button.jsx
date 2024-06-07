/* eslint-disable react/prop-types */
const bgColor = {
    white: 'bg-white hover:bg-[#E6E6E6]',
    gray: 'bg-gray-500 hover:bg-gray-400'
}

const textColor = {
    black: 'text-black',
    gray: 'text-gray-400',
    white: 'text-white'
}

const buttonWeight = {
    full: 'w-full',
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
        `}
        onClick={onClick}
        >
            {children}
        </button>
    )
}