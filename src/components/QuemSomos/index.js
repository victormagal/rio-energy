import React from 'react'

import Footer from '../Shared/Footer'
import CardList from '../Shared/CardList'
import ListImageProfile from '../Shared/ListImageProfile'
import ClientsPartners from '../Shared/ClientsPartners'
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

const imgs = [america, america];

export default function QuemSomos() {
  return (
    <div>
      <h2 className="title text-xl font-bold pb-7 text-blue-sky-night text-center">Nossos líderes em energia</h2>
      <ListImageProfile list={profileImages} />
      <CardList />
      <ClientsPartners imgs={imgs} />
      <Footer />
    </div>
  )
}
