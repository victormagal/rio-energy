import React from 'react'

import Header from '../Shared/Header'
import ListImageProfile from '../Shared/ListImageProfile'
import CardList from '../Shared/CardList'
import Footer from '../Shared/Footer'

import imageCardOne from '../../assets/images/ilustracao_1.png'
import imageCardTwo from '../../assets/images/ilustracao_2.png'
import imageCardThree from '../../assets/images/ilustracao_3.png'
import imageCardFour from '../../assets/images/ilustracao_4.png'

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

export default function Carreira() {

  return (
    <>

      <Header
        className='bg-green-power'
        colorLogo='blue-sky-night'
      >
        <h2 className="text-clear pt-36 pl-16 text-5xl font-serif">Você também está<br /> empenhado em construir<br /> um futuro mais limpo?<br /> Então, vem!</h2>
      </Header>

      <div className="xl:container mx-auto pt-36">

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="ml-24">
            <h3 className="text-blue-sky-night font-serif text-5xl">Rio Energy joga<br /> limpo</h3>
          </div>

          <div className="mb-36">
            <p className="text-dark text-sm ">Somos um time forte, competente e motivado.<br /><br />
          Porque é essa energia que precisamos para construir um futuro mais sustentável.<br /><br />
          Damos o nosso melhor por qualidade e excelência, mas também sabemos que vamos mais longe<br />juntos, no trabalho em equipe. Por isso, criamos um ambiente horizontal, potencializando a<br />colaboração e o aprendizado entre pessoas das mais diferentes áreas e níveis corporativos.<br /><br />
          Ética é nossa premissa e inovação é nosso mindset. Assim, prezamos pelo bom relacionamento<br />com todos os nossos stakeholders e acreditamos que as melhores soluções são desenvolvidas em<br /><br />parceria.
          Quer fazer parte do time da Rio Energy? Confira nossas oportunidades.</p>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 ml-60 mb-36">
          <div className="mr-2 mb-4">
            <h4 className="text-green-power font-serif text-lg">Incansáveis na entrega de<br /> excelência</h4>
            <p className="text-dark text-sm font-family mt-1">Apaixonados pelo que fazemos, damos o nosso melhor.</p>
          </div>
          <div className="mr-2 mb-4">
            <h4 className="text-green-power font-serif text-lg">Parceria para dentro e para fora</h4>
            <p className="text-dark text-sm font-family mt-1">Criamos conexões valiosas com todos que caminham ao nosso lado.</p>
          </div>
          <div className="mr-2 mb-4">
            <h4 className="text-green-power font-serif text-lg">Fazemos com responsabilidade<br /> social, econômica e ambiental</h4>
            <p className="text-dark text-sm font-family mt-1">Miramos sempre no futuro sustentável.</p>
          </div>
          <div className="mr-2 mb-4">
            <h4 className="text-green-power font-serif text-lg">Energia para inovar e ir além</h4>
            <p className="text-dark text-sm font-family mt-1">Nosso mindset é voltado para construir o futuro que desejamos.</p>
          </div>
        </div>

        <div className="">
          <img src="" alt="" />
        </div>

        <div className="grid grid-cols-2 gap-7">
          <h4 className="text-green-power font-serif text-5xl ml-24 col-start-2 col-span-7">Energia limpa e para todos.<br /> É nisso que acreditamos.</h4>
          <p className="text-dark text-sm col-span-2">Na Rio Energy, fazemos a diferença todos os dias. Nosso<br />trabalho é promover o acesso confiável, sustentável,<br />moderno e com preço acessível de energia.<br /><br />
          Com os nossos ativos, abastecemos milhões de casas,<br /> ajudamos a construir uma matriz energética mais limpa e um<br />futuro mais sustentável para as próximas gerações. Também<br /> atuamos em parceria com diversas comunidades<br /> promovendo ações de acesso à saúde, água, saneamento e<br />valorização da cultura.</p>
        </div>

      </div>

      <h2 className="title text-xl font-serif pt-16 pb-7 text-blue-sky-night text-center">Veja com que já faz parte dessa história</h2>

      <div className="xl:container mx-auto">
        <ListImageProfile list={profileImages} />
      </div>

      <div className="pt-12 grid grid-cols-2">
        <div className="mx-auto">
          <h2 className="text-green-power font-serif text-3xl ">Trabalhamos por um<br />futuro melhor para<br /> todos</h2>
        </div>
        <div className="pl-10">
          <CardList data={cards} />
        </div>
      </div>
      <Footer />
    </>
  )
}
