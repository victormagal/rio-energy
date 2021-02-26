import React from 'react'

import Footer from '../Shared/Footer'
import Projetos from '../Shared/Projetos'

export default function Home() {
  return (
    <div>
      <Projetos />
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
        <h3 className="text-4xl	text-blue-sky-night font-bold my-6">#energiaquenosmove</h3>
        <div className="slider flex flex-row flex-nowrap justify-center gap-4 overflow-x-auto">
        <div className="w-60 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-60 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-60 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-60 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-60 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-60 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-60 border border-green-light rounded-2xl px-6 py-6 mx-auto">
          <h4 className="text-blue-sky-night">Há 1 dia</h4>
          <p className="text-gray-mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt ex vel massa consequat, eget dapibus risus sollicitudin volutpat.</p>
          <a className="text-blue-sky-night" href="">Linkedin</a>
          <span className="text-blue-sky-night">@rioenergy</span>
        </div>
        <div className="w-60 border border-green-light rounded-2xl px-6 py-6 mx-auto">
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
