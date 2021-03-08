import React from 'react'

export default function Menu() {
  return (
    <div className=" h-screen fixed w-screen z-10 bg-green-power px-32 py-32">
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
        <ul className=" text-5xl mb-20 text-blue-sky-night font-serif">
          <li className="mb-10">
            <a href="/">Início</a>
          </li>
          <li className="mb-10">
            <a href="/quemsomos">Quem somos</a>
          </li>
          <li className="mb-10">
            <a href="/energia">Nossa energia</a>
          </li>
          <li className="mb-10">
            <a href="/impacto">Nosso impacto</a>
          </li>
          {/* <li className="mb-10">
            <a href="/carreira">Carreira</a>
          </li>
          <li className="mb-10">
            <a href="/investidores">Investidores</a>
          </li> */}
          <li className="mb-10">
            <a href="/contato">Contato</a>
          </li>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 self-end justify-self-end text-white">
        <ul className="info-end">
          <li>
            <p>Rua Jardim Botânico 518, 5º andar</p>
          </li>
          <li>
            <p>Jardim Botânico</p>
          </li>
          <li>
            <p>Rio de Janeiro, RJ – Brasil</p>
          </li>
        </ul>
        <ul className="info-tel-email">
          <li>
            <p>+55 21 3733-2975</p>
            <p>contato@rioenergy.com.br</p>
          </li>
        </ul>
      </div>
      </nav>
      <ul className="info-sociais text-white flex items-stretch">
          <li className=""><a href="http://">LinkedIn</a></li>
          <li className=""><a href="http://">Facebook</a></li>
        </ul>

    </div>
  )
}
