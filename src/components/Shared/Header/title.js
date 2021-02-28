import React from 'react'

export default function Title({ classes, titulo, subtitulo, botao = null }) {
  return (
    <div>
      <h2 className="titulo"> {titulo} </h2>
      {subtitulo && <p className="sub-titulo"> {subtitulo} </p>}
      {botao && <button className="botao-header">{botao}</button>}
    </div>
  )
}
