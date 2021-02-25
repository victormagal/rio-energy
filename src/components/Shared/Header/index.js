import React from 'react'

import Title from './title'
import info from './info'

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <img src="logo_header.svg" alt="" className="inline-block fill-current text-green-light mt-7 logo w-auto h-auto"/>
    x     <div>
            <h3><Title
          titulo={info[0].titulo}
          subtitulo={info[0].subtitulo}
        /></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div className="menu">
        <button className="menu">X</button>

        <button className="fale-conosco">...</button>

    </div>
    </div>
  )
}
