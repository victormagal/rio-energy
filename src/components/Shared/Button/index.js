import React, { useState } from 'react'

export default function BtnGroup ({ btnButtons, btnClick, color, newClasses = [], classes })  {
  const [btnId, setBtnId] = useState()

  const handlerClick = (e, id) => {
    setBtnId(id)
    btnClick(e)
  }

  const defaultClasses = [
    'h-30',
    'w-60',
    'border-2',
    'rounded-3xl',
    'mb-7',
    'ring-transparent',
    'ring-current',
    'font-sans',
    `border-${color}`,
    'p-3',
    'inline-block',
    'hover:text-white',
  ]

  classes = classes || [...defaultClasses, ...newClasses];

  return (
    <>
      {btnButtons.map((btnLabel, i) => (
        <button
          key={i}
          className={classes.join(' ')}
          name={btnLabel}
          onClick={(e) => handlerClick(e, i)}
        >
          {btnLabel}
          <svg xmlns="http://www.w3.org/2000/svg" className="inline ml-3 h-5 text-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
</svg>
        </button>
      ))}
    </>
  );
};


