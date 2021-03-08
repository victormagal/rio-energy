import React from 'react'

export default function Card({ img, title, description }) {
  return (
    <div className="w-5/6 bg-iris-10 text-blue-sky-night flex p-3 pr-5 mb-6 rounded-2xl">
      <div>
        <img src={img} alt="" width="150" />
      </div>
      <div className="pl-2 pt-4">
        <h3 className="font-serif font-bold text-xl">{title}</h3>
        <p className="font-sans font-normal text-dark text-base pt-2">{description}</p>
      </div>
    </div>
  )
}
