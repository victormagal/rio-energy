import React from 'react'

export default function Menu() {
  return (
    <div>
      <>
        <menu>
            <div className="logo-container">
              {/* <a href="">
                logo
              </a> */}
            </div>
            <div className="icon-close">
              {/* <a href="">
                icon
              </a> */}
            </div>
            <nav>
              <ul>
                <li>
                  <a href="">Quem somos</a>
                </li>
                <li>
                  <a href="">Nossa energia</a>
                </li>
                <li>
                  <a href="">Nosso impacto</a>
                </li>
                <li>
                  <a href="">Carreira</a>
                </li>
                <li>
                  <a href="">Investidores</a>
                </li>
                <li>
                  <a href="">Contato</a>
                </li>
              </ul>
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
              <ul className="info-sociais">
                <li><a href="http://">LinkedIn</a></li>
                <li><a href="http://">Facebook</a></li>
              </ul>
            </nav>
        </menu>
      </>
    </div>
  )
}
