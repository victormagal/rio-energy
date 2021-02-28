import React from 'react';

export default function Lideres() {

  const liders = ['subestacao.png'];

  return (
    <div>
      <div className="title">Nossos líderes em energia</div>
      <div className="img" >
        {liders.map((value, i) => (
          <>
            <div key={i} style={{ backgroundImage: `url('${value}')` }} />
            <div className="inf">
              <h3 className="nome">Nome</h3>
              <p className="cargo">Cargo</p>
              <link href="" />
            </div>
          </>)
        )}
      </div>
    </div>
  )
}
