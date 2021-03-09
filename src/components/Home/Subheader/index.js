import React from 'react'
// import Button from '../Button'


export default function Subheader() {

  return (
    <>
      <div className="subheader w-full bg-blue-sky-night">
        <div className="xl:container mx-auto py-5 px-10 md:py-10 md:px-20  ">
          <h4 className="text-green-light font-serif font-bold text-4xl">Atuamos em 4 frentes de energia:</h4>

          <div className="text-white font-serif font-bold text-8xl mt-20">
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
