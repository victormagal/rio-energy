import React, { useState } from 'react';


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
        </button>
      ))}
    </>
  );
};


