/* eslint-disable react/prop-types */

const BgColor = {
    gray: 'bg-gray-400',
    white: 'bg-white',
    none: 'bg-none'
};

const TextColor = {
    gray: 'text-gray-800',
    black: 'text-black'
};

const PlaceholderColor = {
    gray200: 'placeholder:text-gray-200',
    gray800: 'placeholder:text-gray-800'
}

export default function Input({
     type = 'text', placeholder, value, name, weight = 'w-full', onChange, error, bgColor = 'gray', textColor = 'gray', placeholderColor = 'gray200'
    }) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                className={`
            ${weight} px-3 py-1.5 border rounded-lg ${BgColor[bgColor]} ${TextColor[textColor]} ${PlaceholderColor[placeholderColor]} focus:outline-none focus:ring-2
            ${error
                ? 'border-red-500 focus:ring-red-400'
                : 'border-gray-400 focus:border-green-500 focus:ring-blue-300'
            }
            `}
            />
            { error? <small className="text-red-500" >{error}</small> : null }
        </>
    )
}