import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-900 text-white">
        <div className="text-center">
          <img className="box-border h-20 w-20 border-2 inline-block" img="" alt="Logo Rio Energy Footer" />
          <h3 className="text-center text-green-light p-6">Vamos conversar?</h3>
          <div className="box-border h-30 w-60 p-4 border-4 mx-8  inline-block"></div>
        </div>

        <div className="flex justify-between">
          <ul className="flex justify-around">
            <li><a href="http://">LinkedIn</a></li>
            <li><a href="http://">Facebook</a></li>
          </ul>
          <ul className="flex justify-between">
            <li className="pl-2"><a href="http://">Quem somos</a></li>
            <li className="pl-2"><a href="http://">Início</a></li>
            <li className="pl-2"><a href="http://">Nossa energia</a></li>
            <li className="pl-2"><a href="http://">Nosso impacto</a></li>
            <li className="pl-2"><a href="http://">Carreira</a></li>
            <li className="pl-2"><a href="http://">Investidores</a></li>
            <li className="pl-2"><a href="http://">Contato</a></li>
          </ul>
        </div>


        <div className="h-auto border-1 border flex justify-between">
          <p className="">Rio Energy® Todos os direitos reservados</p>
          <p className="">Desenvolvido pela AC</p>
        </div>

      </footer>
    </>
  )
}

