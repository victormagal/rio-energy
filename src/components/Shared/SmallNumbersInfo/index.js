import React from 'react'

export default function SmallNumbersInfo({ value, dollar, rest, desc, type = 'h2' }) {
  let classPrimary = "text-green-power text-8xl -ml-6 font-serif z-0"
  let classSecondary = "text-green-light text-5xl -ml-8 font-serif z-2"
  let infoBigNumber = "block text-gray-mid text-md ml-14 -mt-3.5"
  if (type === 'h1') {
    classPrimary = "text-blue-sky-night text-9xl -ml-0 font-serif z-0"
    classSecondary = "text-green-power text-4xl -ml-40 font-serif z-2"
    infoBigNumber = "block text-gray-mid text-sm ml-8 -mt-3.5"
  }
  return (
    <div className="">
      {dollar && <span className="text-green-light text-md text-5xl relative font-serif z-10"> {dollar} </span>}
      {value && <span className={classPrimary}> {value} </span>}
      {rest && <span className={classSecondary}> {rest} </span>}
      {desc && <span className={infoBigNumber}>{desc}</span>}
    </div>
  )
}
