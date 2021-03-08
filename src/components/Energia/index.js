import React from 'react'

// import Header from '../Shared/Header'
import SmallNumbersInfo from '../Shared/SmallNumbersInfo'
import america from '../../assets/images/america.png'
import ClientsPartners from '../Shared/ClientsPartners'
import Footer from '../Shared/Footer'

const imgs = [america, america];

export default function Energia() {
  return (
    <>

      <div className="xl:container mx-auto pt-40">

        <div className="grid grid-cols-1 gap-4 md:mx-64 md:my-12 justify-items-stretch">
          <div className="justify-self-center md:justify-self-start">
          <h2 className="text-green-power font-serif text-4xl md:text-6xl">Track Record de<br />sucesso nos<br />números e no<br />impacto </h2>

          </div>
          <div className="justify-self-center md:justify-self-end">
            <SmallNumbersInfo
              type="h1"
              value="822"
              rest="MW total"
              desc="em implantação ou em operação"
            />
          </div>
          <div className="justify-self-center md:justify-self-start" >
            <SmallNumbersInfo
              type="h1"
              value="2.2"
              rest="GW total"
              desc="em desenvolvimento"
            />
          </div>
        </div>

      </div>
      <div className="xl:container mx-auto">
        <div className="bg-green-power mb-12" >
          <div className="xl:container mx-auto py-5 px-10 md:py-10 md:px-20">
            <h4 className="text-blue-sky-night font-serif pb-8 text-2xl md:w-1/2 md:ml-14 text-center md:text-right md:text-6xl mt-8">Conheça nossos<br /> diferenciais</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 ml-10 md:ml-40">
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
    </>
  )
}
