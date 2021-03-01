import React from 'react'
export default function ImageProfile({ image, cite, name, role, linkedin }) {
  return (
    <div className="bg-no-repeat bg-cover rounded-lg flex" style={{
      backgroundImage: `url('${image}')`,
      width: '250px',
      height: '300px',
    }}>
      <div className="w-full text-white text-center self-end">
        {cite && <cite>{cite}</cite>}
        <h3 className="font-bold">{name}</h3>
        {role && <h4>{role}</h4>}
        <a className="text-green-power" href={`https://www.linkedin.com/in/${linkedin}`}>LinkedIn</a>
      </div>
    </div>
  )
}
