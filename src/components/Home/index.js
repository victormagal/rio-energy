import React from 'react'

import Footer from '../Shared/Footer'
import Button from '../Shared/Button'


export default function Home() {

  const printBtnLabel = (e) => {
    console.log(e.target.name);
  }

  return (
    <div>
      <Footer />
      <Button
        btnButtons={[
          "Ver Nosso Impacto",
          // "Saiba mais",
          // "Fale conosco",
          // "Ver Nosso Impacto",
          // "Ver Nossa Energia",
          // "Ver oportunidades",
          // "Ver RI",
          // "Vamos conversar"
        ]}
        btnClick={printBtnLabel}
      />

    </div>
  )
}
