import React from 'react'

export default function SmallNumbersInfo({ value, dollar, rest, desc, type = 'h2' }) {
  let classPrimary = "text-green-power big -ml-6 font-serif font-bold z-0"
  let classSecondary = "text-green-light text-7xl -ml-8 font-serif font-bold z-2"
  let infoBigNumber = "block text-gray-mid text-2xl -mt-16 font-sans font-bold"
  if (type === 'h1') {
    classPrimary = "text-blue-sky-night huge -ml-0 font-serif z-0"
    classSecondary = "text-green-power text-4xl -ml-40 font-serif z-2"
    infoBigNumber = "block text-gray-mid text-2xl ml-8 -mt-24 text-right"
  }
  return (
    <div className="">
      {dollar && <span className="text-green-light text-md font-bold text-7xl relative font-serif z-10"> {dollar} </span>}
      {value && <span className={classPrimary}> {value} </span>}
      {rest && <span className={classSecondary}> {rest} </span>}
      {desc && <span className={infoBigNumber}>{desc}</span>}
    </div>
  )
}
