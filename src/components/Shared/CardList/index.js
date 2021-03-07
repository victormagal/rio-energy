import React from 'react'
import Card from './card'

export default function CardList({ data }) {
  return (
    <>
      {data.map((value, key) => (
        <Card {...value} key={key} />
      ))}
    </>
  )
}
