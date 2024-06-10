/* eslint-disable react/prop-types */

export default function Input({ type = 'text', placeholder, value, name, weight = 'w-full', onChange, error }) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                className={`
            ${weight} px-3 py-1.5 border rounded-lg bg-gray-400 text-gray-800 placeholder:text-gray-200 focus:outline-none focus:ring-2
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