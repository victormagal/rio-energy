import React from 'react'
import Scroll from '../Scroll'

export default function ClientsPartners({ imgs, title = 'Same Energy, nossos clientes' }) {
  return (
    <div className="flex bg-gray-light font-sans">
      <div className="w-full self-center">
        <h3 className="text-2xl	text-blue-sky-night text-center font-bold break-word pt-32">{title}</h3>

        <Scroll className="py-24">
          <div className="flex flex-row">
            {imgs.map((value, i) => (
              <div className="ml-20">
                <div
                  className="bg-no-repeat bg-center w-60 h-32"
                  style={{ backgroundImage: `url(${value})` }}
                />
              </div>
            ))}
          </div>
        </Scroll>

      </div>
    </div>
  )
}
