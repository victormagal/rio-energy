import React from 'react'
// import Button from '../Button'


export default function Subheader() {

  return (
    <>
      <div className="subheader w-full bg-blue-sky-night">
        <div className="xl:container mx-auto py-5 px-10 md:py-10 md:px-20  ">
          <h4 className="text-green-light font-serif text-md md:text-2xl">Atuamos no desenvolvimento,<br/> implantação e operação da energia.</h4>

          <div className="text-white font-serif text-2xl md:text-6xl	">
            <h5 className="mb-3 md:mb-5">Desenvolvimento</h5>
            <h5 className="mb-3 md:mb-5">Implantação</h5>
            <h5 className="mb-3 md:mb-5">Operação</h5>
            <h5 className="mb-3 md:mb-5">Comercialização</h5>
          </div>
        </div>
      </div>

    </>
  )
}
