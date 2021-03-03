import React from 'react'

import { Link } from 'react-router-dom'

export default function Contato() {

  return (
    <>
      <main className="w-full bg-green-light text-white h-96 block">

      </main>
      <footer className="w-full bg-blue-sky-night text-white">
        <div className="xl:container mx-auto text-center">
          <div className="md:container grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-24 text-left mx-auto py-20" >
            <div className="border">
              <h4 className="text-4xl font-black">Lorem ipsum</h4>
              <p className="py-2">Delectus voluptatem ipsam quibusdam nostrum ab cupiditate officiis quia, deleniti sunt nihil</p>
              <a href="#" className="text-green-power underline">emporibus dolorum</a>
            </div>
            <div className="border">
              <h4 className="">Lorem ipsum</h4>
              <p className="">Delectus voluptatem ipsam quibusdam nostrum ab cupiditate officiis quia, deleniti sunt nihil</p>
              <a href="#" className="">emporibus dolorum</a>
            </div>
            <div className="border">
              <h4 className="">Lorem ipsum</h4>
              <p className="">Delectus voluptatem ipsam quibusdam nostrum ab cupiditate officiis quia, deleniti sunt nihil</p>
              <a href="#" className="">emporibus dolorum</a>
            </div>

          </div>
          <div className="grid grid-rows-1 md:grid-cols-2  py-14">
            <div className="border">
              logo logo
            </div>
            <div className="border text-left">
              <div>
                <p>Rua Jardim Botânico 518, 5º andar <br/>
                  Jardim Botânico<br/>
                  Rio de Janeiro, RJ – Brasil</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        {/* <nav className="xl:container mx-auto flex flex-col-reverse md:flex-row md:justify-between border-1 md:px-6 sm:py-2">
          <ul className="justify-center flex pb-6 md:pb-0 text-sm md:text-base font-serif">
            <li className="pr-6"><a href="http://">LinkedIn</a></li>
            <li className="pr-6 "><a href="http://">Facebook</a></li>
          </ul>
        </nav> */}

        <div className=" bg-dark py-3 md:py-0 font-sans">
          <div className="xl:container h-auto mx-auto flex justify-between text-gray-mid md:px-6 py-0.5">
            <p className=""><span className="">Rio Energy®</span> Todos os direitos reservados</p>
            <p className="font-black">Desenvolvido pela AC</p>
          </div>
        </div>
      </footer>
    </>
  )
}
