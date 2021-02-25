import React from 'react'
import './card'
import Card from './card'
import info from './info'

export default function CardList() {
  return (
    <div>
      <h1>Jeito Rio Energy de ser</h1>
      <Card 
        img={info[0].imgURL}
        titulo={info[0].titulo}
        subtitulo={info[0].subtitulo}
      />
    </div>
  )
}
