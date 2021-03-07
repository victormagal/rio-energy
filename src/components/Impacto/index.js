import React from 'react'

import Header from '../Shared/Header'
import Button from '../Shared/Button'
// import Menu from '../Shared/Menu'
import Subfooter from '../Shared/Subfooter'
import Footer from '../Shared/Footer'

export default function Home() {
  const printBtnLabel = (e) => {
    console.log(e.target.name);
  }
  return (
    <>
    {/* <Menu>
    </Menu> */}
      <Header>
        { /* <Title className="hello" titulo="Energia para um futuro sustentável" /> */ }

      </Header>
      <main className="w-full bg-green-power relative ">

        <svg className="absolute top-1 z-0" width="361" height="519" viewBox="0 0 361 519" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M326.454 433.427L-40.5463 518.69C-46.9503 520.16 -53.3543 516.24 -54.8322 509.869C-68.6255 446.657 -76.5074 381.975 -77 317.293C-77 310.433 -71.5812 305.043 -65.1772 305.043L311.676 305.533C318.08 305.533 323.498 310.923 323.498 317.293C323.991 351.594 327.932 385.405 335.321 419.216C336.799 425.587 332.858 431.957 326.454 433.427Z" fill="#C3F37B"/>
            <path d="M187.044 1.23436L354.042 76.2067C359.953 78.6568 362.417 86.007 359.953 91.8872C346.16 123.738 335.815 157.059 328.426 190.87C326.948 197.24 321.037 201.161 314.633 200.181L146.65 167.84C140.246 166.369 133.842 170.78 132.364 177.15C127.93 202.631 124.482 228.111 122.511 254.082C122.019 260.452 116.6 265.353 109.703 265.353L-64.1909 255.552C-70.5949 255.062 -76.0137 249.672 -75.5211 242.812C-71.0875 178.13 -59.7573 114.428 -42.0231 51.7059C-40.0526 45.3358 -33.6485 41.9057 -27.2445 43.3757L128.423 88.947C134.827 90.9071 141.231 87.4771 143.201 81.1068C151.083 56.1161 160.443 31.1253 170.788 7.11452C173.744 0.744313 181.133 -1.70573 187.044 1.23436Z" fill="#C3F37B"/>
        </svg>
        <div className="xl:container mx-auto z-2 relative pl-32 pt-24 pb-24">
          <h1 className="font-serif text-white text-6xl ml-32 ">Atuação e gestão <br/>100% ESG</h1>

          <div className=" ml-96 pl-32">
            <p>Do desenvolvimento à operação, a Rio Energy segue o padrão IFC (Performance Standards do IFC) para garantir maior eficiência e desempenho nos temas de impacto socioambiental em todas as fases dos projetos.</p>
            <p>As regiões onde os nossos projetos estão inseridos direciona nossa atenção aos padrões de desempenho 4 – Community, 6- Biodiversidade e 7- Comunidades Tradicionais. É por isso que aplicamos a avaliação de hierarquia para evitar impactos adversos; e a avaliação Habitas Críticos para ter um saldo líquido positivo na conservação da biodiversidade. </p>
            <p>E também elaboramos relatórios de progresso para atestar nosso avanço no impacto positivo. A Rio Energy tem orgulho de participar do Global Compact, comprometida com os 10 princípios associados aos temas de Direitos Humanos, Trabalho, Meio Ambiente e Anticorrupção.</p>
            <Button color="blue-sky-night text-white mt-10">Ver Nossa Energia</Button>
          </div>

        </div>

      </main>
      <Subfooter />
      <Footer />
    </>
  )
}
