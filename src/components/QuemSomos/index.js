import React from 'react'

import Footer from '../Shared/Footer'
import CardList from '../Shared/CardList'
import ListImageProfile from '../Shared/ListImageProfile'
import america from '../../assets/images/america.png'

const profileImages = [
  {
    name: 'Marcos Meireles',
    role: 'CEO',
    linkedin: 'example',
    image: 'http://localhost:3000/ceo.png',
  },
  {
    name: 'Alexandre Nogueira',
    role: 'DIRETOR CORPORATIVO',
    linkedin: 'example',
    image: 'http://localhost:3000/ceo.png',
  },
  {
    name: 'Roberto Colindres',
    role: 'CFO, RI e M&A',
    linkedin: 'example',
    image: 'http://localhost:3000/ceo.png',
  },
];

export default function QuemSomos() {

  const imgs = [america, america];

  return (
    <div>
      <div className="title">Nossos líderes em energia</div>
      <ListImageProfile list={profileImages} />
      <CardList />
      <div className="subfooter w-auto xl:container font-sans mx-auto my-4 text-center">
        <h3 className="text-4xl	text-blue-sky-night font-bold my-6 break-words">Quem joga limpo com a gente</h3>
        <div className="slider xl:container flex flex-nowrap overflow-x-scroll scrolling-touch justify-items-stretch gap-4 px-6 pr-6 mx-auto">
          {imgs.map((value, i) => (
            <img src={value} alt="" key={i} />)
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
