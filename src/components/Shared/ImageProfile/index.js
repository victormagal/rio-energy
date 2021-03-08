import React from 'react'
export default function ImageProfile({ image, cite, name, role, linkedin }) {
  return (
    <div className="bg-no-repeat bg-cover rounded-2xl flex" style={{
      backgroundImage: `url('${image}')`,
      width: '363px',
      height: '546px',
    }}>
      <div className="w-full text-white text-center self-end pb-3">
        {cite && <cite>{cite}</cite>}
        <h3 className="font-serif font-bold text-4xl">{name}</h3>
        {role && <h4 className="font-sans font-bold font- text-lg">{role}</h4>}
        <a className="text-green-power font-serif font-bold text-xl" href={`https://www.linkedin.com/in/${linkedin}`} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  )
}
