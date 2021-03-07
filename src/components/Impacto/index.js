import React from 'react'

import Header from '../Shared/Header'
import Button from '../Shared/Button'
// import Menu from '../Shared/Menu'
import Subfooter from '../Shared/Subfooter'
import Footer from '../Shared/Footer'
import bg_sub from '../../assets/images/bg_sub_impacto.jpeg'
// import bg_header from '../../assets/images/bg_header_impacto.jpeg'

export default function Home() {
  const printBtnLabel = (e) => {
    console.log(e.target.name);
  }
  return (
    <>
    {/* <Menu>
    </Menu> */}
      <Header className="">
      {/* style={{ backgroundImage: `url('${bg_header}')` }} */}
          <h1 className="text-white font-serif text-6xl text-center">Energia para um futuro sustentável</h1>
      </Header>
      <main className="w-full  relative ">
        <div className="xl:container mx-auto relative grid bg-green-power">
          <h1 className="font-serif text-white text-6xl m-6  md:ml-24 z-10 md:my-12">Atuação e gestão <br/>100% ESG</h1>
          <div className="grid grid-cols-1 px-6 md:px-auto md:grid-cols-2">
            <div className="">

            </div>
            <div className="md:mr-24">
              <p>Do desenvolvimento à operação, a Rio Energy segue o padrão IFC (Performance Standards do IFC) para garantir maior eficiência e desempenho nos temas de impacto socioambiental em todas as fases dos projetos.</p>
              <p>As regiões onde os nossos projetos estão inseridos direciona nossa atenção aos padrões de desempenho 4 – Community, 6- Biodiversidade e 7- Comunidades Tradicionais. É por isso que aplicamos a avaliação de hierarquia para evitar impactos adversos; e a avaliação Habitas Críticos para ter um saldo líquido positivo na conservação da biodiversidade. </p>
              <p>E também elaboramos relatórios de progresso para atestar nosso avanço no impacto positivo. A Rio Energy tem orgulho de participar do Global Compact, comprometida com os 10 princípios associados aos temas de Direitos Humanos, Trabalho, Meio Ambiente e Anticorrupção.</p>
              <Button color="blue-sky-night text-white"
                btnButtons={[
                      "Ver Nossa Energia",
                    ]}
                btnClick={printBtnLabel}
              />
            </div>
        </div>

        </div>
      </main>

      <div className="xl:container mx-auto z-0 relative bg-green-power ">
      <svg className="absolute -top-96 z-10 hidden md:block" width="361" height="519" viewBox="0 0 361 519" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M326.454 433.427L-40.5463 518.69C-46.9503 520.16 -53.3543 516.24 -54.8322 509.869C-68.6255 446.657 -76.5074 381.975 -77 317.293C-77 310.433 -71.5812 305.043 -65.1772 305.043L311.676 305.533C318.08 305.533 323.498 310.923 323.498 317.293C323.991 351.594 327.932 385.405 335.321 419.216C336.799 425.587 332.858 431.957 326.454 433.427Z" fill="#C3F37B"/>
            <path d="M187.044 1.23436L354.042 76.2067C359.953 78.6568 362.417 86.007 359.953 91.8872C346.16 123.738 335.815 157.059 328.426 190.87C326.948 197.24 321.037 201.161 314.633 200.181L146.65 167.84C140.246 166.369 133.842 170.78 132.364 177.15C127.93 202.631 124.482 228.111 122.511 254.082C122.019 260.452 116.6 265.353 109.703 265.353L-64.1909 255.552C-70.5949 255.062 -76.0137 249.672 -75.5211 242.812C-71.0875 178.13 -59.7573 114.428 -42.0231 51.7059C-40.0526 45.3358 -33.6485 41.9057 -27.2445 43.3757L128.423 88.947C134.827 90.9071 141.231 87.4771 143.201 81.1068C151.083 56.1161 160.443 31.1253 170.788 7.11452C173.744 0.744313 181.133 -1.70573 187.044 1.23436Z" fill="#C3F37B"/>
        </svg>
         <img className="w-full h-auto z-0 relative" src={bg_sub} alt=""/>
      </div>
      <div className="xl:container mx-auto relative ">

        <h2 className="text-blue-sky-night font-serif text-4xl w-80 m-6 md:ml-24 md:mt-12">Chamada para ODS e Resultados Limpos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="component flex flex-wrap content-center mx-auto">
            component numerico
          </div>
          <div className="px-6 md:px-auto">
            <p>
              Comprometida com o futuro do planeta e das próximas gerações, a Rio Energy adota os Objetivos de Desenvolvimento Sustentável (ODS) no seu modelo de negócios e busca construir projetos de geração de valor compartilhado com as comunidades onde seus projetos estão inseridos.
              Nossos projetos sociais voluntários são construídos de forma participativa com as comunidades locais e demais parceiros sempre com a preocupação de deixar um legado seja por meio de melhorias na infraestrutura básica, na educação, saúde e geração de renda.

              Veja como alguns de nossos projetos contribuem para o alcance dos ODSs
            </p>
            <div className="tqb border h-44 my-12">
              componet tab
            </div>
            <p>
              Para garantir essa “pegada” ESG, a Rio Energy conta com um Sistema de Gestão Integrado onde são publicadas e atualizadas as Políticas de Meio Ambiente e Responsabilidade Social, Saúde e Segurança Ocupacional, Investimentos Sociais, além de planos de gestão e procedimentos operacionais específicos. Esses documentos de gestão auxiliam não apenas nossos funcionários, mas também são incluídos nas condições de contratação de terceiros de forma a replicar nossas diretrizes para toda a cadeia de fornecedores.
            </p>
            <h3 className="">Por isso, também, implementamos o ciclo PDCA, onde é verificada a performance das empresas contratadas por meio de auditorias.</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-auto">
          <div className=" ">
            <h6>A performance ESG é avaliada ainda por meio de um conjunto de indicadores específicos (KPIs) definidos pelo nosso time de especialistas e monitorados frequentemente.</h6>
            <p>
              Além de tudo, por sermos uma empresa de geração de energia renovável, nossas operações contribuem para a redução da emissão de carbono para a atmosfera, auxiliando o nosso país a cumprir as metas de redução globais definidas pela ONU
            </p>
          </div>
          <div className="component flex flex-wrap content-center mx-auto">
            component numerico
          </div>
        </div>
      </div>


      <Subfooter />
      <Footer />
    </>
  )
}
