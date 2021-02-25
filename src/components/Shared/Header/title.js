import React from 'react'

export default function Title(props) {
  return (
    <div>
      <h2 className="titulo"> {props.titulo} </h2>
      <p className="sub-titulo"> {props.subtitulo} </p>
    </div>
  )
}
