import React from 'react'

import Footer from '../Shared/Footer'
import Header from '../Shared/Header'
import CardImage from '../Shared/CardImage'

export default function Home() {
  return (
    <div>
      <Header />
      <CardImage />
      <div className="card-duplo xl:container mx-auto border-2 border-green-light grid grid-rows-1 md:grid-cols-2">
        <div className="card border-2 border-blue-sky-night">
          <h3>Nossa Energia</h3>
          <h2>Conheça nossas soluções e diferenciais para você</h2>
          <button>
            Saiba mais
          </button>
        </div>
        <div className="card border-2 border-blue-sky-night">
          <h3>Nossa Energia</h3>
          <h2>Conheça nossas soluções e diferenciais para você</h2>
          <button>
            Saiba mais
          </button>
        </div>
      </div>
      <div className="subfooter w-auto h-40"></div>
      <Footer />
    </div>
  )
}
