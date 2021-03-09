import React from 'react'
// import Button from '../Button'

export default function Subheader() {
  return (
    <>
      <div className="subheader w-full bg-blue-sky-night">
        <div className="xl:container mx-auto py-16 px-40">
          <h4 className="text-green-light font-serif font-bold text-4xl">Atuamos em 4 frentes de energia:</h4>
          <div className="text-white font-serif font-bold mt-16" style={{ fontSize: '5.25rem' }}>
            <h5 className="">Desenvolvimento</h5>
            <h5 className="">Implantação</h5>
            <h5 className="">Operação</h5>
            <h5 className="">Comercialização</h5>
          </div>
        </div>
      </div>

    </>
  )
}