import React, { useState } from 'react';


export default function BtnGroup ({ btnButtons, btnClick })  {
  const [btnId, setBtnId] = useState()

  const handlerClick = (e, id) => {
    setBtnId(id)
    btnClick(e)
  }

  return (
    <>
      {btnButtons.map((btnLabel, i) => (
        <button
          key={i}
          name={btnLabel}
          onClick={(e) => handlerClick(e, i)}
          className={"h-30 w-60 border-2 rounded-3xl mb-7 border-green-light p-3 inline-block focus:text-green-light"}
        >
          {btnLabel}
        </button>
      ))}
    </>
  );
};


