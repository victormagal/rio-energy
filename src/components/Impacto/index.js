import React from 'react'

import Header from '../Shared/Header'
import Button from '../Shared/Button'
import SmallNumbersInfo from '../Shared/SmallNumbersInfo'
import Subfooter from '../Shared/Subfooter'
import Footer from '../Shared/Footer'

import TabComponent from './TabComponent'

import bg_sub from '../../assets/images/bg_sub_impacto.jpeg'


export default function Home() {
  return (
    <>
      <Header
        colorLogo="#191B87"
        image='bg_header_impacto.png'
      >
        <div className="col-span-12 text-center pt-32">
          <h2 className="text-white font-serif font-bold text-7xl text-center pt-96">Energia para um futuro sustentável</h2>
        </div>
      </Header>
      <main className="w-full relative ">
        <div className="relative grid bg-green-power">
          <div className="xl:container mx-auto py-32">
            <h1 className="font-serif text-white w-2/4 text-7xl ml-44">Atuação e gestão consciente e de alto padrão</h1>
            <div className="w-2/4 pl-24 -mt-12 ml-96">
                <p className="font-sans font-normal text-base text-dark">Por gerarmos energia renovável, nossas operações contribuem para a redução de emissão de carbono, auxiliando nosso país a cumprir as metas globais da ONU.</p>
                <p className="font-sans font-normal text-base text-dark mt-4">Do desenvolvimento à operação, seguimos o Performance Standards do IFC (Padrões de Desempenho de Sustentabilidade Socioambiental) para garantir maior eficiência e desempenho nos temas de impacto socioambiental em todas as fases dos nossos projetos.</p>
                <p className="font-sans font-normal text-base text-dark my-4">Aplicamos avaliação de hierarquia para evitar impactos adversos, avaliação Habitats Críticos para ter um saldo líquido positivo na conservação da biodiversidade, geramos relatórios de progresso e somos signatários do Pacto Global.</p>
                <Button href="/energia" color="blue-sky-night text-white" newClasses={['text-xl', 'font-sans', 'font-semibold']}>Ver Nossa Energia</Button>
            </div>
        </div>

        </div>
      </main>

      <div className="z-0 relative bg-green-power ">
        <svg className="absolute -top-96 z-10 hidden md:block" width="361" height="519" viewBox="0 0 361 519" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M326.454 433.427L-40.5463 518.69C-46.9503 520.16 -53.3543 516.24 -54.8322 509.869C-68.6255 446.657 -76.5074 381.975 -77 317.293C-77 310.433 -71.5812 305.043 -65.1772 305.043L311.676 305.533C318.08 305.533 323.498 310.923 323.498 317.293C323.991 351.594 327.932 385.405 335.321 419.216C336.799 425.587 332.858 431.957 326.454 433.427Z" fill="#C3F37B"/>
            <path d="M187.044 1.23436L354.042 76.2067C359.953 78.6568 362.417 86.007 359.953 91.8872C346.16 123.738 335.815 157.059 328.426 190.87C326.948 197.24 321.037 201.161 314.633 200.181L146.65 167.84C140.246 166.369 133.842 170.78 132.364 177.15C127.93 202.631 124.482 228.111 122.511 254.082C122.019 260.452 116.6 265.353 109.703 265.353L-64.1909 255.552C-70.5949 255.062 -76.0137 249.672 -75.5211 242.812C-71.0875 178.13 -59.7573 114.428 -42.0231 51.7059C-40.0526 45.3358 -33.6485 41.9057 -27.2445 43.3757L128.423 88.947C134.827 90.9071 141.231 87.4771 143.201 81.1068C151.083 56.1161 160.443 31.1253 170.788 7.11452C173.744 0.744313 181.133 -1.70573 187.044 1.23436Z" fill="#C3F37B"/>
        </svg>
        <img className="w-full h-auto z-0 relative" src={bg_sub} alt=""/>
      </div>
      <div className="xl:container mx-auto relative ">
        <h2 className="text-blue-sky-night font-serif font-bold text-7xl mt-20 ml-40">Desenvolvimento<br />sustentável, resultados<br />limpos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="component flex flex-col flex-wrap justify-center mx-auto ">
            {/* <SmallNumbersInfo
              dollar='R$'
              value='3,1'
              rest='bi'
              desc='lorem ipsum dolor color'
            />
            <SmallNumbersInfo
              value='391'
              rest='MW'
              desc='lorem ipsum dolor color'
            /> */}
          </div>
          <div className="px-6 md:px-auto -mt-12 -ml-28">
            <p className="font-sans font-normal text-dark text-base">
            Comprometidos com o futuro do planeta e das próximas gerações, adotamos os Objetivos de Desenvolvimento Sustentável (ODS) no nosso modelo de negócio para construir projetos que gerem valor compartilhado com as comunidades onde estamos inseridos.
            </p>
            <p className="font-sans font-normal text-dark text-base mt-4">
            Nossos projetos são idealizados de forma participativa com as comunidades locais e parceiros visando melhorias em infraestrutura, educação, saúde e geração de renda.
            </p>
            <div className="tab p-7 bg-iris-10 my-12" style={{ height: 480 }}>
              <TabComponent />
            </div>
            {/* <p>
              Para garantir essa “pegada” ESG, a Rio Energy conta com um Sistema de Gestão Integrado onde são publicadas e atualizadas as Políticas de Meio Ambiente e Responsabilidade Social, Saúde e Segurança Ocupacional, Investimentos Sociais, além de planos de gestão e procedimentos operacionais específicos. Esses documentos de gestão auxiliam não apenas nossos funcionários, mas também são incluídos nas condições de contratação de terceiros de forma a replicar nossas diretrizes para toda a cadeia de fornecedores.
            </p> */}
            {/* <h3 className="text-green-power font-serif text-2xl mt-6">Por isso, também, implementamos o ciclo PDCA, onde é verificada a performance das empresas contratadas por meio de auditorias.</h3> */}
          </div>
        </div>
        <div className="grid grid-cols-1 px-6">
          <div className="pl-40">
            <span className="text-blue-sky-night font-serif font-bold text-4xl mb-6">Avaliamos nossa performance ESG<br />por meio de um conjunto de<br />indicadores definidos pelos nossos<br />especialistas e monitorados<br />constantemente.</span>
            {/* <p>
              Além de tudo, por sermos uma empresa de geração de energia renovável, nossas operações contribuem para a redução da emissão de carbono para a atmosfera, auxiliando o nosso país a cumprir as metas de redução globais definidas pela ONU
            </p> */}
          </div>
        </div>
        <div className="-mt-24 grid grid-cols-3 px-6">
          <div className=""></div>
          <div className="">
            <div className="text-right">
              <SmallNumbersInfo
                dollar='+'
                value='330'
                rest='mil'
                desc='pessoas impactadas diretamente por projetos sociais. Indiretos: 3.159.928'
              />
            </div>
            <div className="text-right">
              <SmallNumbersInfo
                dollar='+'
                value='9'
                rest='mi'
                desc='investidos em ações sociais'
              />
            </div>
          </div>
          <div className="ml-24">
            <div className="">
              <SmallNumbersInfo
                value='36'
                desc='ações desenvolvidas'
              />
            </div>
            <div className="mt-10">
              <SmallNumbersInfo
                value='2.9'
                desc='toneladas de emissão de CO2 evitadas'
              />
            </div>
          </div>
          <div className="mt-12">
          </div>
        </div>
        <div className="w-full block"></div>
        <div className="grid grid-cols-2 md:grid-cols-2 px-6 mb-20 md:px-auto">
          <div className="flex justify-end">
            <h5 className="text-green-power font-serif font-bold text-7xl">Pegada<br />ESG</h5>
            {/* <p>
              Além de tudo, por sermos uma empresa de geração de energia renovável, nossas operações contribuem para a redução da emissão de carbono para a atmosfera, auxiliando o nosso país a cumprir as metas de redução globais definidas pela ONU
            </p> */}
          </div>
          <div className="pt-20 -ml-16">
            <p className="text-xl text-dark font-serif -font-bold">
              Temos um Sistema de Gestão Integrado onde são publicadas e<br />atualizadas as Políticas de Meio Ambiente e Responsabilidade Social,<br />Saúde e Segurança Ocupacional, Investimentos Sociais, além de planos<br />de gestão e procedimentos operacionais específicos. Esses documentos<br />auxiliam não apenas nossos colaboradores, mas também são incluídos<br />nas condições de contratação de parceiros para replicar nossas<br />diretrizes para toda a cadeia de fornecedores.
            </p>
          </div>
        </div>
      </div>


      <Subfooter />
      <Footer />
    </>
  )
}
