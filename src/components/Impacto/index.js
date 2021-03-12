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
      <main className="w-full bg-green-power py-40">
        <div className="xl:container mx-auto grid grid-cols-12 gap-4">
          <div className="col-start-2 col-span-7">
            <h1 className="font-serif font-bold text-white text-7xl">Atuação e gestão consciente e de alto padrão</h1>
          </div>
          <div className="col-start-6 col-span-6 -mt-16">
            <div className="font-sans font-normal text-base text-dark">
                <p className="">Por gerarmos energia renovável, nossas operações contribuem para a redução de emissão de carbono, auxiliando nosso país a cumprir as metas globais da ONU.</p>
                <p className="mt-4">Do desenvolvimento à operação, seguimos o Performance Standards do IFC (Padrões de Desempenho de Sustentabilidade Socioambiental) para garantir maior eficiência e desempenho nos temas de impacto socioambiental em todas as fases dos nossos projetos.</p>
                <p className="my-4">Aplicamos avaliação de hierarquia para evitar impactos adversos, avaliação Habitats Críticos para ter um saldo líquido positivo na conservação da biodiversidade, geramos relatórios de progresso e somos signatários do Pacto Global.</p>
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

      <div className="xl:container mx-auto grid grid-cols-12 gap-4 py-20">
        <div className="col-start-2 col-span-8">
          <h2 className="text-blue-sky-night font-serif font-bold text-7xl">Desenvolvimento<br />sustentável, resultados<br />limpos</h2>
        </div>
        <div className="col-start-6 col-span-7 -mt-16">
          <p className="font-sans font-normal text-dark text-base">
          Comprometidos com o futuro do planeta e das próximas gerações, adotamos os Objetivos de Desenvolvimento Sustentável (ODS) no nosso modelo de negócio para construir projetos que gerem valor compartilhado com as comunidades onde estamos inseridos.
          </p>
          <p className="font-sans font-normal text-dark text-base mt-4">
          Nossos projetos são idealizados de forma participativa com as comunidades locais e parceiros visando melhorias em infraestrutura, educação, saúde e geração de renda.
          </p>
        </div>
        <div className="col-start-6 col-span-7 bg-iris-10 p-8 mb-14" style={{ height: 480 }}>
          <TabComponent />
        </div>
        <div className="col-start-2 col-span-6">
          <span className="text-blue-sky-night font-serif font-bold text-4xl">Avaliamos nossa performance ESG<br />por meio de um conjunto de<br />indicadores definidos pelos nossos<br />especialistas e monitorados<br />constantemente.</span>
        </div>
        <div className="col-start-5 col-span-4 -mt-28">
          <SmallNumbersInfo
            dollar='+'
            value='330'
            rest='mil'
            desc='pessoas impactadas diretamente por projetos sociais. Indiretos: 3.159.928'
          />
        </div>
        <div className="col-end-12 col-span-3 pl-10 -mt-28">
          <SmallNumbersInfo
            value='36'
            desc='ações desenvolvidas'
          />
        </div>
        <div className="col-start-7 col-span-2 -mt-12">
          <SmallNumbersInfo
            dollar='+'
            value='9'
            rest='mi'
            desc='investidos em ações sociais'
          />
        </div>
        <div className="col-span-3 pl-10 -mt-12">
          <SmallNumbersInfo
            value='2.9'
            desc='toneladas de emissão de CO2 evitadas'
          />
        </div>
        <div className="col-start-3 col-span-3">
          <h5 className="text-green-power font-serif font-bold text-7xl">Pegada<br />ESG</h5>
        </div>
        <div className="col-start-4 col-span-8 -mt-20 pl-10">
          <p className="text-xl text-dark font-serif -font-bold">
            Temos um Sistema de Gestão Integrado onde são publicadas e<br />atualizadas as Políticas de Meio Ambiente e Responsabilidade Social,<br />Saúde e Segurança Ocupacional, Investimentos Sociais, além de planos<br />de gestão e procedimentos operacionais específicos. Esses documentos<br />auxiliam não apenas nossos colaboradores, mas também são incluídos<br />nas condições de contratação de parceiros para replicar nossas<br />diretrizes para toda a cadeia de fornecedores.
          </p>
        </div>
      </div>

      <Subfooter />
      <Footer />
    </>
  )
}
