import React from 'react'

import Footer from '../Shared/Footer'
import CardList from '../Shared/CardList'
import ListImageProfile from '../Shared/ListImageProfile'
import ClientsPartners from '../Shared/ClientsPartners'
import Button from '../Shared/Button'
import america from '../../assets/images/america.png'
import subestacao from '../../assets/images/subestacao.png'
import circuloFogo from '../../assets/images/circulo_logo.svg'
import Header from '../Shared/Header'

import imageCardOne from '../../assets/images/ilustracao_1.png'
import imageCardTwo from '../../assets/images/ilustracao_2.png'
import imageCardThree from '../../assets/images/ilustracao_3.png'
import imageCardFour from '../../assets/images/ilustracao_4.png'

const cards = [
  {
    img: imageCardOne,
    title: 'Incansáveis na entrega de excelência',
    description: 'Apaixonados pelo que fazemos, damos o nosso melhor.',
  },
  {
    img: imageCardTwo,
    title: 'Parceria para dentro e para fora',
    description: 'Criamos conexões valiosas com todos que caminham ao nosso lado.',
  },
  {
    img: imageCardThree,
    title: 'Fazemos com responsabilidade social, econômica e ambiental',
    description: 'Miramos sempre no futuro sustentável.',
  },
  {
    img: imageCardFour,
    title: 'Energia para inovar e ir além',
    description: 'Nosso mindset é voltado para construir o futuro que desejamos.',
  },
]

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
        <div className="pl-16 mx-auto">
          <h2 className="text-green-power text-5xl font-bold">Desde 2012<br />Construindo um<br />futuro mais limpo</h2>
          <h3 className="text-blue-sky-night w-96 mt-6 ml-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris augue, pulvinar eget cursus in, viverra ac massa. In ut hendrerit mi, a finibus dolor. Pellentesque porttitor cursus nisl elementum sodales. Morbi ultrices nunc ut neque congue dapibus. Nulla condimentum nulla quis tortor dapibus, id lobortis dolor laoreet. </h3>
          <Button href="/impacto" color="green-light" newClasses={['text-blue-sky-night', 'mt-5', 'ml-52']}>Ver Nosso Impacto</Button>
        </div>
      </Header>
      <div className="relative">
        <div className="bg-green-power">
          <div className="xl:container pt-24">
            <div className="w-96 absolute ml-60 mt-40">
              <h2 className="text-white text-2xl font-bold">Incansáveis na entrega de excelência, com energia para inovar e ir além.</h2>
            </div>
            <img src={circuloFogo} alt="logo" className="mx-auto" />
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-green-power to-transparent absolute">
          <div className="xl:container mx-auto py-5 md:py-10 md:px-80 " >

            <div className="text-white font-serif mt-12 ">
              <p className="font-sans text-base">Apaixonados pelo que fazemos, entendemos o tamanho da<br /> responsabilidade. Por isso somos comprometidos e transparentes,<br /> sempre buscando gerar valor para todos à nossa volta.</p>
              <p className="font-sans text-base mt-4 pb-5">Desenvolvemos soluções em conjunto, instigando todos a pensarem além<br /> e fora da caixa. Prezamos pelos altos padrões de eficiência e estamos<br /> atentos ao mercado para desenvolver novas e melhores soluções.</p>
              <div className="text-center">
                <Button
                  href="/energia"
                  color="blue-sky-night w-30"
                  removeClass={['w-60']}
                >
                  Nossa Energia
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-no-repeat bg-center py-80" style={{ backgroundImage: `url('${subestacao}')` }}></div>
      </div>

      <h2 className="title text-xl font-bold pt-16 pb-7 text-blue-sky-night text-center">Nossos líderes em energia</h2>

      <div className="xl:container mx-auto">
        <ListImageProfile list={profileImages} />
      </div>

      <div className="pt-12 grid grid-cols-2">
        <div className="mx-auto">
          <h2 className="text-blue-sky-night text-3xl w-44 text-center">Jeito <span className="text-green-power">Rio Energy</span> de ser</h2>
        </div>
        <div className="pl-10">
          <CardList data={cards} />
        </div>
      </div>

      <ClientsPartners imgs={imgs} />
      <Footer />
    </>
  )
}
