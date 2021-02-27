import React from 'react'

import Title from './title'
import info from './info'
import logo from '../../../assets/images/logo_header.svg'

export default function Header() {
  return (
    <>
      <div className="header bg-green-light border-4 border-blue-sky-night h-{90}">
        <div className="md:container mx-auto md:pl-10 h-48 min-h-full">
          <div className="logo">
            <img src={logo} alt="" className="inline-block fill-current text-white mt-7 logo w-auto h-auto"/>
          </div>
          <div>
            <Title className="hello" titulo={info[0].titulo} subtitulo={info[0].subtitulo} />
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
