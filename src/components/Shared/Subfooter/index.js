import React from 'react'
import Scroll from '../Scroll'

const mock = [
  {
    date: 'Há 2 semanas',
    description: 'Temos o prazer de anunciar que amanhã, 20 de fevereiro, os 27 contemplados com a Bolsa de Estudos do Curso Técnico em Eletrotécnica iniciam suas inscrições, com uma aula...',
    link: 'https://www.linkedin.com/posts/rio-energy_energiaquenosmove-activity-6768637368309207040-cAvE',
    account: '@rioenergy'
  },
  {
    date: 'Há 3 semanas',
    description: '50 mil seguidores! Se fossem 50 mil Megawatts, seriam suficientes para atender às necessidades de consumo de mais de 24 mil residências durante um ano inteiro...',
    link: 'https://www.linkedin.com/posts/rio-energy_energiaquenosmove-energiasrenovaerveis-porummundomelhor-activity-6765005028286611456-7oAU',
    account: '@rioenergy'
  },
  {
    date: 'Há 1 mês',
    description: 'Tem gente nova e cheia de energia no nosso time! São os nossos #SuperEstags, que chegaram para contribuir com as suas ideias e competências. São 15 jovens iniciando...    ',
    link: 'https://www.linkedin.com/posts/rio-energy_superestags-energiaquenosmove-activity-6762449034213933056-Cg5x',
    account: '@rioenergy'
  },
  {
    date: 'Há 1 mês',
    description: 'Até 2050, a matriz energética brasileira será composta 45% de energias renováveis. #EnergiaQueNosMove #JuntosnaMeta #AcordodeParis...',
    link: 'https://www.linkedin.com/posts/rio-energy_energiaquenosmove-juntosnameta-acordodeparis-activity-6758113137548935168-gFoT',
    account: '@rioenergy'
  }
];

export default function SubFooter({ collection }) {
  collection = collection || mock
  return (
    <>
      <div className="subfooter w-auto xl:container font-sans mx-auto text-center bg-gray-light" style={{ paddingBottom: '7.25rem' }}>
        <h3 className="text-4xl	text-blue-sky-night font-bold mb-10 font-serif" style={{ paddingTop: '6.375rem' }}>#energiaquenosmove</h3>
        <Scroll className="gap-4 px-6 pr-6 mx-auto">
          {collection.map((value, index) => (
            <div key={index} className="w-1/4 border border-green-light rounded-2xl px-4 py-12 mx-2">
              <h4 className="text-blue-sky-night text-sm font-sans font-semibold">{value.date}</h4>
              <p className="text-gray-mid text-lg font-sans font-normal mb-12">{value.description}</p>
              <a className="text-blue-sky-night text-base font-sans font-normal" href={value.link} target="_blank" rel="noreferrer">Linkedin</a>
              <p className="text-blue-sky-night text-lg font-serif font-bold mt-2">{value.account}</p>
            </div>
          ))}
        </Scroll>
      </div>
    </>
  )
}
