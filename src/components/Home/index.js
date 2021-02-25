import React from 'react'

import Footer from '../Shared/Footer'
import Header from '../Shared/Header'
import CardImage from '../Shared/CardImage'
import CardList from '../Shared/CardList'

export default function Home() {
  return (
    <div>
      <CardList />
      <Header />
      <CardImage />
      <div className="card-duplo xl:container mx-auto border-2 border-green-light grid grid-rows-1 md:grid-cols-2">
        <div className="card">
          <h3>Nossa Energia</h3>
          <h2>Conheça nossas soluções e diferenciais para você</h2>
          <button>
            Saiba mais
          </button>
        </div>
        <div className="card">
          <h3>Nossa Energia</h3>
          <h2>Conheça nossas soluções e diferenciais para você</h2>
          <button>
            Saiba mais
          </button>
        </div>
      </div>

      <div className="subfooter w-auto xl:container font-sans mx-auto my-4 text-center">
        <h3 className="text-4xl	text-blue-sky-night font-bold my-6 break-words">#energiaquenosmove</h3>
        <div className="slider container flex flex-nowrap overflow-x-scroll scrolling-touch justify-items-stretch gap-4 px-6 pr-6">
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
