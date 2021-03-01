import React from 'react'
import ImageProfile from '../ImageProfile'
import Scroll from '../Scroll'

export default function ListImageProfile({ list }) {

  return (
    <Scroll>
      {list.map((item, i) => (
        <ImageProfile key={i} {...item} />
      ))}
     </Scroll> 
  )
}
