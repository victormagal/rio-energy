import React, { useState } from 'react'

import iconSaude from '../../../assets/images/tab_saude_bem.png'
import iconSaudeDesactive from '../../../assets/images/tab_saude_bem_desactive.png'

import iconAgua from '../../../assets/images/tab_agua_potavel.png'
import iconAguaDesactive from '../../../assets/images/tab_agua_potavel_desactive.png'

import iconTrabalho from '../../../assets/images/tab_trabalho_dece.png'
import iconTrabalhoDesactive from '../../../assets/images/tab_trabalho_dece_desactive.png'

import iconCidades from '../../../assets/images/tab_cidades.png'
import iconCidadesDesactive from '../../../assets/images/tab_cidades_desactive.png'

import iconVida from '../../../assets/images/tab_vida_terrestre.png'
import iconVidaDesactive from '../../../assets/images/tab_vida_terrestre_desactive.png'


export default function TabComponent() {
  const [images, setImages] = useState({
    saude: true,
    agua: false,
    trabalho: false,
    cidade: false,
    vida: false,
  })

  const [contextIndex, setContextIndex] = useState(0)

  const handleSelect = (key) => {
    const defaults = {
      saude: false,
      agua: false,
      trabalho: false,
      cidade: false,
      vida: false,
    };

    setImages({ ...defaults, [key]: true })

    setContextIndex(Object.keys(defaults).indexOf(key))
  }

  const content = [
    [
      'Ativação de um Centro Cirúrgico e uma sala de estabilização no Hospital Municipal de Itarema (CE), por meio da aquisição de equipamentos hospitalares;',
      'Doação de gerador de energia, equipamentos de Raio X e eletrocardiograma para o Hospital de Ourolândia (BA);',
      'Apoio à reforma da UPA de Morro do Chapéu para atendimento de casos de COVID-19;',
      'Doação de 250 testes rápidos para a detecção de COVID-19.'
    ],
    [
      'Instalação de sistemas de abastecimento de água em 3 comunidades em Itarema (CE);',
      'Instalação de sistemas de abastecimento de água comunidades no entorno de Serra da Babilônia (BA);',
      'Instalação de 65 banheiros agroecológicos para famílias das comunidades no entorno de Serra da Babilônia (BA)'
    ],
    [
      'Reforma da sede da Cooperativa de Marisqueiras de Itarema (CE);',
      'Reforma do Polo de Artesanato de Almofala e capacitação de artesãs (Itarema - CE);',
      'Apoio e capacitação de agricultores para a produção agroecológica e comercialização do adubo orgânico em Caetité (BA);',
      'Reforma do Galpão comunitário de São Bento, em Serra da Babilônia (BA);',
      'Apoio à agricultura familiar e assessoria técnica rural a mais de 60 produtores em Serra da Babilônia (BA);',
    ],
    [
      'Pavimentação de vilas em Itarema (CE);',
      'Estruturação da comunidade quilombola de Gruta dos Brejões (BA), incluindo a reforma e expansão da escola municipal;',
      'Reforma da área comunitária de esportes e lazer - Praca da Tabua (BA);',
      'Apoio ao projeto comunitário de reciclagem de resíduos sólidos - Recicla Ourolândia (BA);'
    ],
    [
      'Preservação e mapeamento de nascentes aquáticas em Caetité (BA);',
      'Apoio ao programa Brotando Água na implantação de barragens, lagos multiusos e barragens subterrâneas, para melhorar a gestão da água na região rural de Caetité (BA);',
      'Construção do Viveiro de São Bento (BA) para a produção de mudas da Caatinga nativa, contribuindo com a preservação do bioma Capacidade anual de mais de 60.000 sementes.'
    ]
  ]

  return (
    <>
      <nav className="tab-navigation">
        <span className="font-serif text-2xl font-bold text-dark">Veja algumas ODS alcançadas pelos nossos projetos:</span>
        <ul className="mt-2">
          <li className="inline-block mr-6 cursor-pointer" onClick={() => handleSelect('saude')}>
            {images.saude ?
              <img src={iconSaude} alt=""/> :
              <img src={iconSaudeDesactive} alt=""/>
            }
          </li>
          <li className="inline-block mr-6 cursor-pointer" onClick={() => handleSelect('agua')}>
            {images.agua ?
              <img src={iconAgua} alt=""/> :
              <img src={iconAguaDesactive} alt=""/>
            }
          </li>
          <li className="inline-block mr-6 cursor-pointer" onClick={() => handleSelect('trabalho')}>
            {images.trabalho ?
              <img src={iconTrabalho} alt=""/> :
              <img src={iconTrabalhoDesactive} alt=""/>
            }
          </li>
          <li className="inline-block mr-6 cursor-pointer" onClick={() => handleSelect('cidade')}>
            {images.cidade ?
              <img src={iconCidades} alt=""/> :
              <img src={iconCidadesDesactive} alt=""/>
            }
          </li>
          <li className="inline-block mr-6 cursor-pointer" onClick={() => handleSelect('vida')}>
            {images.vida ?
              <img src={iconVida} alt=""/> :
              <img src={iconVidaDesactive} alt=""/>
            }
          </li>
        </ul>
      </nav>
      <div>
        <ul className="list-disc list-inside">
        {content[contextIndex].map((c) => (
          <li className="pt-3 font-sans text-xl text-gray">{c}</li>
        ))}
        </ul>
      </div>
    </>
  )
}
