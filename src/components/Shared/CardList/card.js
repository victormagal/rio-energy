import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt=""/>
      <h2 className="titulo"> {props.titulo} </h2>
      <p className="sub-titulo"> {props.subtitulo} </p>
    </div>
  )
}
