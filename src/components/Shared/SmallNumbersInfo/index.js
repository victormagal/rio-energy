import React from 'react'

export default function SmallNumbersInfo({ value, dollar, rest, desc, type = 'h2' }) {
  let classPrimary = "text-green-power text-xl text-8xl -ml-6 font-serif z-0"
  let classSecondary = "text-green-light text-md text-5xl -ml-8 font-serif z-2"
  if (type === 'h1') {
    classPrimary = "text-blue-sky-night text-xl text-9xl mb-8 -ml-0 font-serif z-0"
    classSecondary = "text-green-power text-lg text-4xl -ml-40 font-serif z-2"
  }
  return (
    <div className="container">
      {dollar && <span className="text-green-light text-md text-5xl relative font-serif z-10"> {dollar} </span>}
      {value && <span className={classPrimary}> {value} </span>}
      {rest && <span className={classSecondary}> {rest} </span>}
      {desc && <span className="block text-gray-mid text-md ml-14 -mt-3.5">{desc}</span>}
    </div>
  )
}
