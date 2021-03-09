import React from 'react'
import video from '../../../assets/images/bg_player.png'

export default function Player() {

  return (
    <>
      <div className="player xl:container mx-auto pt-10 px-10">
        <div className="flex flex-col justify-end video rounded-3xl block bg-cover" style={{ height: '622px', backgroundImage: `url('${video}')`}} >
          <div className="flex flex-col pb-6">
            <h1 className="text-center font-serif font-bold text-7xl text-white">Energia para um futuro sustentável</h1>
            <h2 className="text-center font-sans font-semibold text-white" style={{ fontSize: '1.75rem' }}>Nossa energia cresce de mãos dadas com nosso impacto.</h2>
          </div>
        </div>
      </div>
    </>
  )
}
