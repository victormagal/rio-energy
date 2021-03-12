import React from 'react'

import Header from '../Shared/Header'
import Subheader from '../Home/Subheader'
import Player from '../Home/Player'
import Button from '../Shared/Button'
import Subfooter from '../Shared/Subfooter'
import Footer from '../Shared/Footer'

import impacto from '../../assets/images/nosso_impacto.png'
import energia from '../../assets/images/nossa_energia.png'
import quemsomos from '../../assets/images/bg_quemsomos.png'
import './style.css'

// import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Header
        className='bg-green-power'
        colorLogo='#191B87'
        image='bg_header_home.png'
      >
        <div className="col-start-2 col-span-5 pt-24">
          <h2 className="text-blue-sky-night text-7xl font-serif font-bold">Rio Energy.<br />Por um futuro <br /> mais limpo</h2>
        </div>
      </Header>
      <Subheader />
      <Player />

      <div className="quem-somos w-full mx-auto">
        <div className="grid grid-rows-1 md:grid-cols-12" style={{ marginTop: '3.75rem', marginBottom: '3.75rem' }}>
          <div className="image-disclaimer col-span-7 bg-contain bg-no-repeat bg-left" style={{ backgroundImage: `url('${quemsomos}')`, height:`572px` }} >
          </div>
          <div className="col-span-5 flex items-center">
            <div className=" mr-12">
              <h5 className=" text-green-power font-sans font-bold text-sm uppercase">Quem somos</h5>
              <h1  className=" text-blue-sky-night font-serif font-bold text-7xl">A gente respira energia.</h1>
              <p  className="font-sans font-normal text-dark text-lg">Com expertise em projetos renováveis, nosso time é reconhecido pelas entregas de qualidade dentro do orçamento. Somos experientes, engajados, com ampla capacidade de execução e sempre alinhados às melhores práticas ambientais, sociais e de governança.</p>
              <Button href="/quemsomos" color="green-power" colorSvg='blue-sky-night' newClasses={['text-dark', 'text-center', 'mt-7', 'text-xl']}>Saiba mais</Button>
              {/* <Link to="/quemsomos" className="text-dark text-center mt-7 text-xl"> Saiba mais</Link> */}
            </div>
          </div>
        </div>

      </div>
      <div className="card-duplo bg-gray-mid mx-auto grid grid-rows-1 md:grid-cols-2 relative">
      {/* <svg className="absolute" width="1280" height="2169" viewBox="0 0 1280 2169" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: '-1500px' }} >
<path d="M1717.73 991.563L1717.73 991.572L995.378 2147.63C995.376 2147.63 995.374 2147.63 995.373 2147.64C983.145 2166.74 956.933 2173.71 935.947 2161.54C737.543 2035.3 551.65 1887.73 383.631 1724.15L383.616 1724.14L383.6 1724.12C366.186 1708.53 366.13 1680.75 383.639 1663.33L1352.74 702.907L1352.74 702.906C1368.44 687.287 1396.42 687.287 1412.12 702.906L1412.13 702.913L1412.13 702.92C1501.57 788.328 1599.96 866.622 1705.5 934.241C1722.98 946.421 1729.93 972.503 1717.73 991.563Z" stroke="#C3F37B" stroke-width="2"/>
<path d="M866.044 3.83308L866.029 3.83882L243.833 238.597C243.828 238.599 243.823 238.601 243.818 238.603C222.853 247.302 210.634 271.621 221.125 295.97L221.129 295.981L221.134 295.993C256.882 384.89 296.204 470.231 340.889 555.572L340.892 555.579L340.896 555.587C351.839 577.357 344.584 604.664 322.582 615.617C322.577 615.619 322.572 615.621 322.568 615.624L-195.925 894.843L-195.939 894.85L-195.954 894.858C-216.918 905.284 -225.625 931.331 -213.417 952.149L-213.41 952.161C-97.2235 1156.64 38.6244 1348.66 194.134 1526.47C209.865 1543.84 237.84 1545.57 255.299 1529.94L255.302 1529.94L727.333 1110.2C744.813 1094.55 746.543 1068.51 730.835 1051.15L730.825 1051.14L730.816 1051.13C670.009 979.966 610.986 905.243 557.326 828.737C542.674 808.687 548.207 781.396 568.281 766.874L568.296 766.864L568.311 766.854L1083.26 421.813L1083.27 421.805L1083.28 421.799C1102.46 409.658 1107.72 383.608 1095.49 364.491C1095.49 364.491 1095.49 364.49 1095.49 364.49L1096.33 363.951C1026.6 257.237 969.381 145.188 921.105 27.8029L866.044 3.83308ZM866.044 3.83308L866.059 3.82698C886.932 -4.82403 911.422 7.27656 920.182 28.1893L866.044 3.83308Z" stroke="#C3F37B" stroke-width="2"/>
</svg> */}
        <div className="card object-cover bg-no-repeat bg-center w-full h-full mx-auto text-white font-sans text-center bg-cover " style={{ backgroundImage: `url('${energia}')` }} >
          <div className="z-40 w-full h-full px-16 py-32 relative">
            <h3 className="p-5 pb-0 font-serif font-bold text-7xl">Nossa Energia</h3>
            <p className="font-sans font-semibold block text-xl px-28 mb-8">Conheça nossas soluções e diferenciais para você</p>
            <Button href="/energia" color="blue-sky-night" colorSvg='green-light' newClasses={['text-xl', 'text-center', 'mt-3', 'font-semibold']}>Saiba mais</Button>

          </div>
          <div className="bg-gray-mid blend-multiply absolute w-full h-full left-0 top-0 z-10  opacity-70"></div>

        </div>
        <div className="card object-cover bg-no-repeat bg-center w-full h-full mx-auto text-white font-sans text-center bg-cover" style={{ backgroundImage: `url('${impacto}')` }} >
          <div className="z-40 w-full h-full px-16 py-32 relative">
            <h3 className="p-5 pb-0 font-serif font-bold text-7xl">Nosso impacto</h3>
            <p className="font-sans font-semibold block text-xl px-28 mb-8"> Saiba como podemos construir o futuro que queremos</p>
            <Button href="/impacto" color="blue-sky-night" colorSvg='green-light' newClasses={['text-xl', 'text-center', 'mt-3', 'font-semibold']}>Saiba mais</Button>
          </div>
          <div className="bg-gray-mid blend-multiply absolute w-full h-full left-0 top-0 z-10 opacity-70"></div>

        </div>
      </div>
      <Subfooter />
      <Footer />
    </>
  )
}
