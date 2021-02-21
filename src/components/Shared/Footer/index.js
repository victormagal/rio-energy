import React from 'react';
import Button from '../Button'

export default function Footer() {

  const printBtnLabel = (e) => {
    console.log(e.target.name);
  }

  return (
    <>
      <footer className="w-full bg-dark text-white">

        <div className="xl:container mx-auto text-center border-2 border-green-light">
          <img className="box-border h-20 w-20 border-2 inline-block" img="" alt="Logo Rio Energy Footer" />
          <h3 className="text-center text-green-light p-6 font-sans text-4xl md:text-5xl">Vamos conversar?</h3>
          <div className="box-border h-30 w-60 p-4 border-4 mx-8  inline-block">
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
              btnClick={printBtnLabel} />
          </div>
        </div>

        <nav className="xl:container mx-auto flex flex-col-reverse md:flex-row md:justify-between border-1 md:px-6 sm:py-2">
          <ul className="justify-center flex pb-6 md:pb-0 text-sm md:text-base">
            <li className="pr-6"><a href="http://">LinkedIn</a></li>
            <li className="pr-6 "><a href="http://">Facebook</a></li>
          </ul>
          <ul className="flex-wrap md:flex-nowrap flex justify-center justify-self-center mx-auto md:mx-0 text-base max-w-sm md:max-w-full py-10 md:py-0 text-sm md:text-base">
            <li className="font-black pr-6"><a href="http://">Quem somos</a></li>
            <li className="pr-6"><a href="http://">Início</a></li>
            <li className="pr-6"><a href="http://">Nossa energia</a></li>
            <li className="pr-6"><a href="http://">Nosso impacto</a></li>
            <li className="pr-6"><a href="http://">Carreira</a></li>
            <li className="pr-6"><a href="http://">Investidores</a></li>
            <li className=""><a href="http://">Contato</a></li>
          </ul>
        </nav>

        <div className="bg-gray">
          <div className="xl:container h-auto mx-auto flex justify-between text-gray-mid md:px-6 py-0.5">
            <p className=""><span className="p">Rio Energy®</span> Todos os direitos reservados</p>
            <p className="font-black">Desenvolvido pela AC</p>
          </div>
        </div>

      </footer>
    </>
  )
}