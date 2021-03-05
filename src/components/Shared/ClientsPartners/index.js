import React from 'react'

export default function ClientsPartners({ imgs }) {
  return (
    <div className="flex h-60 bg-gray-light font-sans">
      <div className="w-full self-center">
        <h3 className="text-2xl	text-blue-sky-night text-center font-bold break-words pb-7">Quem joga limpo com a gente</h3>
        <div className="slider xl:container flex flex-nowrap justify-items-stretch gap-4">
          <div className="flex flex-row">
            {imgs.map((value, i) => (
              <div className="ml-20">
                <img src={value} alt={value} className="w-32" key={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
