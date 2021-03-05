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
  }
];

export default function SubFooter({ collection }) {
  collection = collection || mock
  return (
    <>
      <div className="subfooter w-auto xl:container font-sans mx-auto my-4 text-center">
        <h3 className="text-4xl	text-blue-sky-night font-bold my-6 break-words">#energiaquenosmove</h3>
        <Scroll className="gap-4 px-6 pr-6 mx-auto">
          {collection.map((value, index) => (
            <div key={index} className="w-4/5 border border-green-light rounded-2xl px-6 py-6 mx-auto">
              <h4 className="text-blue-sky-night">{value.date}</h4>
              <p className="text-gray-mid">{value.description}</p>
              <a className="text-blue-sky-night" href={value.link}>Linkedin</a>
              <span className="text-blue-sky-night">{value.account}</span>
            </div>
          ))}
        </Scroll>
      </div>
    </>
  )
}
