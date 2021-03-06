import React from 'react'
import bgMenu from '../../../assets/images/bg_menu.png';
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className="h-screen w-screen fixed z-50 bg-green-power bg-center bg-cover px-32 py-32" style={{ backgroundImage: `url('${bgMenu}')` }}>
      <div className="logo-container">
        {/* <a href="#">
          logo
        </a> */}
      </div>
      <div className="icon-close">
        {/* <a href="#">
          icon
        </a> */}
      </div>
      <nav className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
        <ul className="text-5xl mb-20 text-blue-sky-night font-serif font-bold">
          <Link to="/" className="block mb-8">Início</Link>
          <Link to="/quemsomos" className="block mb-8">Quem somos</Link>
          <Link to="/energia" className="block mb-8">Nossa energia</Link>
          <Link to="/impacto" className="block mb-8">Nosso impacto</Link>
          {/* <Link to="/carreira" className="mb-4">Carreira</Link>
          <Link to="/investidores" className="mb-4">Investidores</Link> */}
          <Link to="/contato" className="block">Contato</Link>
        </ul>
        <div className="grid grid-cols-2 self-end justify-self-end text-white">
          <ul className="info-end font-sans text-base font-normal text-left">
            <li className="mb-5">
              Rua Jardim Botânico 518, 5º andar
            </li>
            <li className="mb-5">
              Jardim Botânico
            </li>
            <li>
              Rio de Janeiro, RJ – Brasil
            </li>
          </ul>
          <ul className="info-tel-email font-sans text-base font-bold ml-8 flex justify-end">
            <li className="mb-5">
              +55 21 3733-2975
            </li>
          </ul>
        </div>
      </nav>
      <ul className="info-sociais text-white flex justify-end text-lg font-serif font-bold mt-14">
        <li className=""><a href="https://www.linkedin.com/company/rio-energy/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li className="ml-9"><a href="https://www.facebook.com/rioenergyoficial" target="_blank" rel="noreferrer">Facebook</a></li>
      </ul>

    </div>
  )
}
