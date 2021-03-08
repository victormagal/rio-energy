import React from 'react'
import Scroll from '../Scroll'

const mock = [
  {
    date: 'Há 1 dia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.',
    link: 'https://www.linkedin.com/company/rio-energy',
    account: '@rioenergy'
  },
  {
    date: 'Há 1 dia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.',
    link: 'https://www.linkedin.com/company/rio-energy',
    account: '@rioenergy'
  },
  {
    date: 'Há 1 dia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.',
    link: 'https://www.linkedin.com/company/rio-energy',
    account: '@rioenergy'
  },
  {
    date: 'Há 1 dia',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.',
    link: 'https://www.linkedin.com/company/rio-energy',
    account: '@rioenergy'
  }
];

export default function SubFooter({ collection }) {
  collection = collection || mock
  return (
    <>
      <div className="subfooter w-auto xl:container font-sans mx-auto my-4 text-center">
        <h3 className="text-4xl	text-blue-sky-night font-bold font-serif my-20 break-words">#energiaquenosmove</h3>
        <Scroll className="gap-4 px-6 pr-6 mx-auto mb-20">
          {collection.map((value, index) => (
            <div key={index} className="border border-green-light rounded-2xl px-4 py-12 mx-2">
              <h4 className="text-blue-sky-night text-sm font-sans font-semibold">{value.date}</h4>
              <p className="text-gray-mid text-lg font-sans font-normal mb-10">{value.description}</p>
              <a className="text-blue-sky-night text-base font-sans font-normal" href={value.link} target="_blank" rel="noreferrer">Linkedin</a>
              <p className="text-blue-sky-night text-lg font-serif font-bold">{value.account}</p>
            </div>
          ))}
        </Scroll>
      </div>
    </>
  )
}
