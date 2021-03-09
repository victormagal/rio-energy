import React from 'react'

import Footer from '../Shared/Footer'
import CardList from '../Shared/CardList'
import ListImageProfile from '../Shared/ListImageProfile'
// import ClientsPartners from '../Shared/ClientsPartners'
import Button from '../Shared/Button'
import Header from '../Shared/Header'

import subestacao from '../../assets/images/subestacao.png'
import circuloFogo from '../../assets/images/circulo_logo.svg'

// import logo_1 from '../../assets/images/logo_1.png'
// import logo_2 from '../../assets/images/logo_2.png'
// import logo_3 from '../../assets/images/logo_3.png'
// import logo_4 from '../../assets/images/logo_4.png'
// import logo_5 from '../../assets/images/logo_5.png'
// import logo_6 from '../../assets/images/logo_6.png'
// import logo_7 from '../../assets/images/logo_7.png'
// import logo_8 from '../../assets/images/logo_8.png'
// import logo_9 from '../../assets/images/logo_9.png'
// import logo_10 from '../../assets/images/logo_10.png'

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
    linkedin: 'marcos-meireles-b24519',
    image: 'http://localhost:3000/lider_1.png'
  },
  {
    name: 'Alexandre Nogueira',
    role: 'DIRETOR CORPORATIVO',
    linkedin: 'alexandrelnogueira',
    image: 'http://localhost:3000/lider_2.png'
  },
  {
    name: 'Roberto Colindres',
    role: 'CFO, RI e M&A',
    linkedin: 'roberto-colindres-091a1b',
    image: 'http://localhost:3000/lider_3.png'
  },
  {
    name: 'Jean Claude Fernand Robert',
    role: 'COO',
    linkedin: 'jean-claude-robert',
    image: 'http://localhost:3000/lider_4.png'
  },
  {
    name: 'Lucas Quevedo',
    role: 'DIRETOR JURÍDICO, COMPLIANCE E DESENVOLVIMENTO',
    linkedin: 'lucas-quevedo-b604bb89',
    image: 'http://localhost:3000/lider_5.png'
  }
];

// const imgs = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8, logo_9, logo_10];

export default function QuemSomos() {
  return (
    <>
      <Header
        className='white'
        colorLogo='#191B87'
        image='bg_header_quemsomos.png'
      >
        <div className="pl-16 mx-auto">
          <h2 className="text-green-power text-7xl font-serif font-bold">Desde 2012<br />construindo um futuro<br />mais limpo</h2>
          <p className="text-blue-sky-night text-xl ml-96 font-sans font-normal">Chegamos no mercado comprometidos com um futuro mais sustentável para todos, trabalhando com desenvolvimento, construção, venda de energia e operação de projetos de energia renovável.</p>
          <p className="text-blue-sky-night text-xl ml-96 font-sans font-normal mt-4">Atualmente, contamos com cerca de 1GW em projetos em implantação ou em operação comercial na Bahia e no Ceará, totalizando mais de R$ 3,2 bi investidos em ativos no país.</p>
          <p className="text-blue-sky-night text-xl ml-96 font-sans font-normal mt-4">Vamos em frente, sendo uma das primeiras empresas brasileiras a emitir Green Bonds e assinar o Pacto Global, reforçando nosso jogo limpo com o futuro nos mais altos padrões de qualidade.</p>
          <Button href="/impacto" color="green-light" newClasses={['text-blue-sky-night', 'mt-5', 'ml-96', 'text-xl']}>Ver Nosso Impacto</Button>
        </div>
      </Header>
      <div className="relative mt-8">
        <div className="bg-green-power">
          <div className="xl:container pt-16 pb-24">
            <div className="w-3/4 mx-auto mt-40" style={{ backgroundImage: `url('${circuloFogo}')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 30px top', height: 430 }}>
              <h2 className="text-white text-4xl font-serif font-bold ml-56 mr-40 pt-40">Incansáveis na entrega de excelência, com energia para inovar e ir além.</h2>
            </div>
            {/* <img src={circuloFogo} alt="logo" className="mx-auto" /> */}
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-green-power to-transparent absolute">
          <div className="xl:container mx-auto py-5 md:py-10 md:px-80 " >

            <div className="text-white font-serif">
              <p className="font-sans text-xl font-semibold text-center">Apaixonados pelo que fazemos, entendemos o tamanho da<br /> responsabilidade. Por isso somos comprometidos e transparentes,<br /> sempre buscando gerar valor para todos à nossa volta.</p>
              <p className="font-sans text-xl text-center font-semibold mt-4 pb-5">Desenvolvemos soluções em conjunto, instigando todos a pensarem além<br /> e fora da caixa. Prezamos pelos altos padrões de eficiência e estamos<br /> atentos ao mercado para desenvolver novas e melhores soluções.</p>
              <div className="text-center">
                <Button
                  href="/energia"
                  color="blue-sky-night w-30"
                  removeClass={['w-60']}
                  newClasses={['text-xl', 'px-8', 'font-semibold']}
                >
                  Nossa Energia
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cover bg-no-repeat bg-center py-80" style={{ backgroundImage: `url('${subestacao}')` }}></div>
      </div>

      <h2 className="title text-4xl font-serif font-bold pt-24 pb-12 text-blue-sky-night text-center">Nossos líderes em energia</h2>

      <div className="ml-20">
        <ListImageProfile list={profileImages} />
      </div>

      <div className="pt-24 pb-24 grid grid-cols-2">
        <div className="mx-auto">
          <h2 className="text-blue-sky-night font-serif font-bold text-7xl w-64">Jeito <span className="text-green-power">Rio Energy</span> de ser</h2>
        </div>
        <div className="pl-10">
          <CardList data={cards} />
        </div>
      </div>

      {/* <ClientsPartners imgs={imgs} /> */}
      <Footer />
    </>
  )
}
