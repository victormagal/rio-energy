import React from 'react'

export default function Card({ img, title, description }) {
  return (
    <div className="bg-iris-10 flex px-9 mb-9 rounded-2xl">
      <div className="w-4/12">
        <img className='w-52' src={img} />
      </div>
      <div className="w-8/12 pt-4">
        <h3 className="font-serif font-bold text-2xl text-blue-sky-night">{title}</h3>
        <p className="font-sans font-normal text-lg text-dark">{description}</p>
      </div>
    </div>
  )
}
