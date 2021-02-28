import React, { useState } from 'react'
import './lideres'
import './colaboradores'
import Lideres from './lideres';
import Colaboradores from './colaboradores';

export default function Index() {

  const [value, setValue] = useState();
  function onChange(value) {
    setValue(value)
  }

  return (
    <>
      <div className="carrossel" 
        value={value}
        onChange={onChange}
      />
      <Lideres />
      <Colaboradores />
    </>
  )
}


