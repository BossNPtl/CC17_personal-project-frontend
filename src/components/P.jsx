/* eslint-disable react/prop-types */

const fontSize = {
    12: "text-xs",
    14: "text-sm",
    16: "text-base",
    20: "text-xl",
    24: "text-2xl"
}
const fontWeight = {
    0: "font-normal",
    1: "font-semibold",
    2: "font-extrabold"
}

export default function P({children, size = 20, weight = 0}) {
  return (
    <p className={`${fontSize[size]} ${fontWeight[weight]}`}>
        {children}
    </p>
  )
}
