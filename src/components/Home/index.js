import React from 'react'

import Footer from '../Shared/Footer'
// import Projetos from '../Shared/Projetos'
import Header from '../Shared/Header'


import Button from '../Shared/Button'

import impacto from '../../assets/images/nosso_impacto.png'
import energia from '../../assets/images/nossa_energia.png'

export default function Home() {
  const printBtnLabel = (e) => {
    console.log(e.target.name);
  }
  return (
    <div>
      {/* <CardList /> */}
      <Header />
      {/* <CardImage /> */}
      <div className="">

      </div>
      <div className="subheader xl:container mx-auto bg-blue-sky-night py-10 px-20">
        <div className="text-white font-serif text-6xl		">
        <h4 className="text-green-light font-serif text-2xl">Atuamos no desenvolvimento,<br/> implantação e operação da energia.</h4>
          <h5 className="mb-5">Desenvolvimento</h5>
          <h5 className="mb-5">Implantação</h5>
          <h5 className="mb-5">Operação</h5>
          <h5 className="mb-5">Comercialização</h5>
        </div>
      </div>
      <div className="player xl:container mx-auto p-10">
        <div className="video border rounded-3xl block" style={{ height: '622px'}} >

        </div>
      </div>
      <div className="quem-somos xl:container mx-auto grid grid-rows-1 md:grid-cols-2">
        <div className="grid-col">
          imagem
        </div>
        <div className="grid-col">
          <h5>Qem somos</h5>
          <h1>Energia que inspira</h1>
          <p>Com expertise em projetos renováveis, nosso time é reconhecido pelas entregas de qualidade dentro do orçamento. Somos experientes, engajados, com ampla capacidade de execução e sempre alinhados às melhores práticas ambientais, sociais e de governança.</p>
          <Button className=" h-30 w-60 border-2 rounded-3xl mb-7 ring-transparent ring-current font-sans border-green-light p-3 block hover:text-white"
              btnButtons={[
                // "Ver Nosso Impacto",
                "Saiba mais",
                // "Fale conosco",
                // "Ver Nosso Impacto",
                // "Ver Nossa Energia",
                // "Ver oportunidades",
                // "Ver RI",
                // "Vamos conversar"
              ]}
              btnClick={printBtnLabel} />

        </div>
      </div>
      <div className="card-duplo xl:container mx-auto grid grid-rows-1 md:grid-cols-2 relative">
      {/* <svg className="absolute" width="1280" height="2169" viewBox="0 0 1280 2169" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ top: '-1500px' }} >
<path d="M1717.73 991.563L1717.73 991.572L995.378 2147.63C995.376 2147.63 995.374 2147.63 995.373 2147.64C983.145 2166.74 956.933 2173.71 935.947 2161.54C737.543 2035.3 551.65 1887.73 383.631 1724.15L383.616 1724.14L383.6 1724.12C366.186 1708.53 366.13 1680.75 383.639 1663.33L1352.74 702.907L1352.74 702.906C1368.44 687.287 1396.42 687.287 1412.12 702.906L1412.13 702.913L1412.13 702.92C1501.57 788.328 1599.96 866.622 1705.5 934.241C1722.98 946.421 1729.93 972.503 1717.73 991.563Z" stroke="#C3F37B" stroke-width="2"/>
<path d="M866.044 3.83308L866.029 3.83882L243.833 238.597C243.828 238.599 243.823 238.601 243.818 238.603C222.853 247.302 210.634 271.621 221.125 295.97L221.129 295.981L221.134 295.993C256.882 384.89 296.204 470.231 340.889 555.572L340.892 555.579L340.896 555.587C351.839 577.357 344.584 604.664 322.582 615.617C322.577 615.619 322.572 615.621 322.568 615.624L-195.925 894.843L-195.939 894.85L-195.954 894.858C-216.918 905.284 -225.625 931.331 -213.417 952.149L-213.41 952.161C-97.2235 1156.64 38.6244 1348.66 194.134 1526.47C209.865 1543.84 237.84 1545.57 255.299 1529.94L255.302 1529.94L727.333 1110.2C744.813 1094.55 746.543 1068.51 730.835 1051.15L730.825 1051.14L730.816 1051.13C670.009 979.966 610.986 905.243 557.326 828.737C542.674 808.687 548.207 781.396 568.281 766.874L568.296 766.864L568.311 766.854L1083.26 421.813L1083.27 421.805L1083.28 421.799C1102.46 409.658 1107.72 383.608 1095.49 364.491C1095.49 364.491 1095.49 364.49 1095.49 364.49L1096.33 363.951C1026.6 257.237 969.381 145.188 921.105 27.8029L866.044 3.83308ZM866.044 3.83308L866.059 3.82698C886.932 -4.82403 911.422 7.27656 920.182 28.1893L866.044 3.83308Z" stroke="#C3F37B" stroke-width="2"/>
</svg> */}
        <div className="card object-cover bg-no-repeat bg-center	w-full h-full mx-auto text-white font-sans text-center bg-cover px-24 py-32" style={{ backgroundImage: `url('${energia}')` }} >

          <h3 className="p-6 pb-0 font-serif text-4xl md:text-5xl">Nossa Energia</h3>
          <span className="block mb-8"> Conheça nossas soluções e diferenciais para você</span>
          <Button className="block h-30 w-60 border-2 rounded-3xl mb-7 ring-transparent ring-current font-sans border-green-light p-3  hover:text-white"
              btnButtons={[
                // "Ver Nosso Impacto",
                "Saiba mais",
                // "Fale conosco",
                // "Ver Nosso Impacto",
                // "Ver Nossa Energia",
                // "Ver oportunidades",
                // "Ver RI",
                // "Vamos conversar"
              ]}
              btnClick={printBtnLabel} />

        </div>
        <div className="card object-cover bg-no-repeat bg-center	w-full h-full mx-auto text-white font-sans text-center bg-cover px-24 py-32" style={{ backgroundImage: `url('${impacto}')` }} >
          <h3 className="p-6 pb-0 font-serif text-4xl md:text-5xl">Nosso impacto</h3>
          <span className="block mb-8"> Saiba como podemos construir o futuro que queremos</span>
          <Button className=" h-30 w-60 border-2 rounded-3xl mb-7 ring-transparent ring-current font-sans border-green-light p-3 block hover:text-white"
              btnButtons={[
                // "Ver Nosso Impacto",
                "Saiba mais",
                // "Fale conosco",
                // "Ver Nosso Impacto",
                // "Ver Nossa Energia",
                // "Ver oportunidades",
                // "Ver RI",
                // "Vamos conversar"
              ]}
              btnClick={printBtnLabel} />
        </div>
      </div>

      <div className="subfooter w-auto xl:container font-sans mx-auto my-4 text-center">
        <h3 className="text-4xl	text-blue-sky-night font-bold my-6 break-words">#energiaquenosmove</h3>
        <div className="slider xl:container flex flex-nowrap overflow-x-scroll scrolling-touch justify-items-stretch gap-4 px-6 pr-6 mx-auto">
        <div className="w- border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-4/5 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-4/5 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-4/5 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-4/5 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-4/5 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-4/5 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-4/5 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}
