import React from 'react'
import Button from '../Button'
import Logo from '../Logo'

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-dark text-white">

        <div className="xl:container mx-auto text-center">
          <Logo
            withText={false}
            color="#C3F37B"
            classNameSvg="h-20 w-20 inline-block fill-current mt-7"
            viewBox="0 0 60 60"
            width={null}
            height={null}
          />

          <h3 className="text-center text-green-light p-6 font-serif text-4xl md:text-5xl">Vamos conversar?</h3>
          <Button href="/contato" color="green-light">Fale conosco</Button>
        </div>

        <nav className="xl:container mx-auto flex flex-col-reverse md:flex-row md:justify-between border-1 md:px-6 sm:py-2">
          <ul className="justify-center flex pb-6 md:pb-0 text-sm md:text-base font-serif">
            <li className="pr-6"><a href="http://">LinkedIn</a></li>
            <li className="pr-6 "><a href="http://">Facebook</a></li>
          </ul>
          <ul className="flex-wrap md:flex-nowrap flex justify-center justify-self-center mx-auto md:mx-0 max-w-sm md:max-w-full py-10 md:py-0 text-sm md:text-base">
            <Link to="/" className="mr-6 ">Início</Link>
            <Link to="/quemsomos" className="mr-6 hover:border-b-2 hover:border-green-light"><a href="http://">Quem somos</a></Link>
            <Link to="/energia" className="mr-6">Nossa energia</Link>
            <Link to="/impacto" className="mr-6">Nosso impacto</Link>
            <Link to="/carreira" className="mr-6">Carreira</Link>
            <Link to="/investidores" className="mr-6">Investidores</Link>
            <Link to="/contato" className="">Contato</Link>
          </ul>
        </nav>

        <div className="blend-screen bg-dark py-3 md:py-0 font-sans">
          <div className="xl:container h-auto mx-auto flex justify-between text-gray-mid md:px-6 py-0.5">
            <p className=""><span className="">Rio Energy®</span> Todos os direitos reservados</p>
            <p className="font-black">Desenvolvido pela AC</p>
          </div>
        </div>

      </footer>
    </>
  )
}
