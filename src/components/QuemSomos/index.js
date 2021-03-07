import React from 'react'

import Footer from '../Shared/Footer'
import CardList from '../Shared/CardList'
import ListImageProfile from '../Shared/ListImageProfile'
import ClientsPartners from '../Shared/ClientsPartners'
import Button from '../Shared/Button'
import america from '../../assets/images/america.png'
import subestacao from '../../assets/images/subestacao.png'
import Header from '../Shared/Header'

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
    <>
      <Header
        className='white'
        colorLogo='#00D35C'
      >
        <div className="pl-16">
          <h2 className="text-green-power text-5xl font-bold">Desde 2012<br />Construindo um<br />futuro mais limpo</h2>
          <h3 className="text-blue-sky-night w-96 mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris augue, pulvinar eget cursus in, viverra ac massa. In ut hendrerit mi, a finibus dolor. Pellentesque porttitor cursus nisl elementum sodales. Morbi ultrices nunc ut neque congue dapibus. Nulla condimentum nulla quis tortor dapibus, id lobortis dolor laoreet. </h3>
        </div>
      </Header>
      <div className="w-full bg-gradient-to-r bg-green-power from-green-400 to-green-500">
        <div className="xl:container mx-auto py-5 md:py-10 md:px-80 " >

          <h4 className="text-clear font-serif text-md md:text-2xl">Atuamos na entrega de excêlencia,<br /> com energia para inovar e ir além.</h4>
          <div className="text-white text-center font-serif mt-12 ">
            <p className="font-sans text-base">Apaixonados pelo que fazemos, entendemos o tamanho da<br /> responsabilidade. Por isso somos comprometidos e transparentes,<br /> sempre buscando gerar valor para todos à nossa volta.</p>
            <p className="font-sans text-base mt-4 pb-5">Desenvolvemos soluções em conjunto, instigando todos a pensarem além<br /> e fora da caixa. Prezamos pelos altos padrões de eficiência e estamos<br /> atentos ao mercado para desenvolver novas e melhores soluções.</p>
            <Button href="/energis" color="blue-sky-night">Nossa Energia</Button>
          </div>
        </div>
      </div>
      <div className="bg-cover bg-center py-80" style={{ backgroundImage: `url('${subestacao}')` }}></div>

      <h2 className="title text-xl font-bold pb-7 text-blue-sky-night text-center">Nossos líderes em energia</h2>
      <ListImageProfile list={profileImages} />
      <CardList />
      <ClientsPartners imgs={imgs} />
      <Footer />
    </>
  )
}
