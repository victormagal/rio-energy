import React from 'react'

import Header from '../Shared/Header'
import america from '../../assets/images/america.png'
import ClientsPartners from '../Shared/ClientsPartners'
import Footer from '../Shared/Footer'

const imgs = [america, america];

export default function Energia() {
  return (
    <div>
      <Header />
      <div className="xl:container mx-auto p-10">
        <div className="bg-green-power" >
          <div className="xl:container mx-auto py-5 px-10 md:py-10 md:px-20">
            <h4 className="text-blue-sky-night font-serif pb-8 text-md w-1/2 ml-16 text-right md:text-5xl mt-8">Conheça nossos<br/> diferenciais</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-48">
              <div className="text-base text-green-light border-t-2 border-fuchsia-600 mr-6 mb-16">
                <h5 className="text-white font-serif mt-3">Lorem Ipsum</h5>
                <p className="text-white text-sm font-family mt-1">lacus lorem, malesuada quis velit vitae, congue ultricies sem. Integer egestas.</p>
              </div>
              <div className="text-base text-green-light border-t-2 border-fuchsia-600 mr-6">
                <h5 className="text-white font-serif mt-3">Lorem Ipsum</h5>
                <p className="text-white text-sm font-family mt-1">lacus lorem, malesuada quis velit vitae, congue ultricies sem. Integer egestas.</p>
              </div>
              <div className="text-base text-green-light border-t-2 border-fuchsia-600 mr-6 mb-16">
                <h5 className="text-white font-serif mt-3">Lorem Ipsum</h5>
                <p className="text-white text-sm font-family mt-1">lacus lorem, malesuada quis velit vitae, congue ultricies sem. Integer egestas.</p>
              </div>
              <div className="text-base text-green-light border-t-2 border-fuchsia-600 mr-6">
                <h5 className="text-white font-serif mt-3">Lorem Ipsum</h5>
                <p className="text-white text-sm font-family mt-1">lacus lorem, malesuada quis velit vitae, congue ultricies sem. Integer egestas.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ClientsPartners imgs={imgs} />
      <Footer />
    </div>
  )
}