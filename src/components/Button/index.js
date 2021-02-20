import React, { useState } from 'react';


const BtnGroup = ({ btnButtons, btnClick }) => {
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
          className={i === btnId ? "customiza btn tela selecionada" : "customiza btn"}
        >
          {btnLabel}
        </button>
      ))}
    </>
  );
};

export default BtnGroup;
