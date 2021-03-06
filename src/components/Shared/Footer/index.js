import React from 'react'
import Button from '../Button'
import Logo from '../Logo'

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="w-full bg-dark text-white">

        <div className="xl:container mx-auto grid grid-cols-12 gap-4 text-center">
          <div className="col-start-4 col-span-6">
            <Logo
              withText={false}
              color="#C3F37B"
              classNameSvg="h-16 w-16 inline-block fill-current mt-7"
              viewBox="0 0 60 60"
              width={null}
              height={null}
            />
            <h2 className="text-green-light mb-6 font-serif font-bold text-7xl">Vamos conversar?</h2>
            <Button href="/contato" color="green-light" newClasses={['text-xl']}>Fale conosco</Button>
          </div>
        </div>

        <nav className="xl:container mx-auto grid grid-cols-12 gap-4 py-6">
          <ul className="col-span-2 text-lg font-serif font-bold">
            <li className="inline-block mr-6">
              <a href="https://www.linkedin.com/company/rio-energy/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li class="inline-block">
              <a href="https://www.facebook.com/rioenergyoficial" target="_blank" rel="noreferrer">Facebook</a>
            </li>
          </ul>
          <ul className="col-span-10 font-serif font-bold text-sm text-right">
            <Link to="/" className="mr-7 inline-block align-middle">Início</Link>
            <Link to="/quemsomos" className="mr-7 inline-block align-middle">Quem somos</Link>
            <Link to="/energia" className="mr-7 inline-block align-middle">Nossa energia</Link>
            <Link to="/impacto" className="mr-7">Nosso impacto</Link>
            {/* <Link to="/carreira" className="mr-7 inline-block align-middle">Carreira</Link>
            <Link to="/investidores" className="mr-7 inline-block align-middle">Investidores</Link> */}
            <Link to="/contato" className="inline-block align-middle">Contato</Link>
          </ul>
        </nav>

        <div className="blend-screen bg-dark py-2">
          <div className="xl:container mx-auto grid grid-cols-12 gap-4 font-sans font-semibold text-sm text-gray-mid">
            <div className="col-span-3">
              <p>Rio Energy® Todos os direitos reservados</p>
            </div>
            <div className="col-span-9 text-right">
              <p>Desenvolvido pela AC</p>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}
