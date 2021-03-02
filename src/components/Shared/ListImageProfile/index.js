import React from 'react'
import ImageProfile from '../ImageProfile'
import Scroll from '../Scroll'

export default function ListImageProfile({ list }) {
  return (
    <Scroll>
      <div className="flex flex-row space-x-5">
        {list.map((item, i) => (
          <ImageProfile key={i} {...item} />
        ))}
      </div>
     </Scroll> 
  )
}
