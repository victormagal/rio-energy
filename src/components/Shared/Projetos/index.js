import React, { useState } from 'react'

import Info from './info'

export default function Projetos() {

  const [title, setTitle] = useState();
  function onChange(title) {
    setTitle(title)
  }

  return (
    <div>
      <img src="" alt="" className="logo"/>
      <h3>Projetos sociais do complexo</h3>
      <div className="carrossel" 
        value={title}
        onChange={onChange}
      />
      <Info />
    </div>
  )
}