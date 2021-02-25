import React from 'react'

import Title from './title'
import info from './info'

export default function Header() {
  return (
    <div>
      <div className="header">
        <img src="" alt="" className="logo" />
        <button className="menu">X</button>
      </div>
      <div>
        <Title
          titulo={info[0].titulo}
          subtitulo={info[0].subtitulo}
        />
      </div>
      <button className="fale-conosco">...</button>
    </div>
  )
}
