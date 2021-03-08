import React from 'react'
import video from '../../../assets/images/bg_player.png'

export default function Player() {

  return (
    <>
      <div className="player xl:container mx-auto p-10">
        <div className="video rounded-3xl block bg-cover" style={{ height: '622px', backgroundImage: `url('${video}')`}} >
          <div className="">

          </div>
        </div>
      </div>
    </>
  )
}
