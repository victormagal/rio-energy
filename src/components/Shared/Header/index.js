import React from 'react'
import SvgLogo from '../Logo'

export default function Header({ children }) {
  return (
    <>
      <div className="header bg-green-light border-4 border-blue-sky-night h-{90}">
        <div className="md:container mx-auto md:pl-10 h-48 min-h-full">
          <div className="logo">
            <SvgLogo withText={true} className="inline-block fill-current mt-7 w-auto h-auto" />
          </div>
          <div>
            {children}
          </div>
        </div>

        <div className="menu absolute">
          <button className="menu">X</button>
          <button className="fale-conosco">...</button>
        </div>
      </div>

    </>
  )
}
