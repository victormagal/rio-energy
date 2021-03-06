import React from 'react'

export default function SmallNumbersInfo({ value, dollar, rest, desc }) {
  return (
    <div className="container">
      {dollar && <span className="text-green-light text-xl text-5xl relative font-serif z-10"> {dollar} </span>}
      {value && <span className="text-green-power text-xl text-9xl -ml-6 font-serif z-0"> {value} </span>}
      {rest && <span className="text-green-light text-xl text-5xl -ml-10 font-serif z-2"> {rest} </span>}
      {desc && <span className="block text-gray-mid text-lg ml-20 -mt-4">{desc}</span>}
    </div>
  )
}
