/* eslint-disable react/prop-types */

export default function Input({ type = 'text', placeholder, value, name, weight = 'w-full' }) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                className={`
            ${weight} px-3 py-1.5 border rounded-lg bg-gray-400 text-gray-800 placeholder:text-gray-200 focus:outline-none focus:ring-2
            `}
            />
        </>
    )
}