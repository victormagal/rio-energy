import React from 'react'
import { Link } from 'react-router-dom'

import logoparcial from '../../assets/images/logo_parcial.svg'


export default function Contato() {

  return (
    <>
      <main className="w-full bg-green-light text-white h-96  flex items-center justify-center static overflow-auto ">

      {/* <svg className="h-60 stroke-current stroke-1 text-blue-sky-night " src={logoparcial} alt=""/> */}

        <svg  className="absolute -top-32 left-50 h-96 stroke-current stroke-1 text-green-power transform -rotate-90"  width="265" height="436" viewBox="0 0 265 436" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M334.888 72.8075L334.885 72.8069L30.0529 1.23318C30.0524 1.23305 30.0518 1.23291 30.0512 1.23278C25.2702 0.124592 20.495 3.07993 19.3891 7.88005C7.94766 60.8742 1.81787 115.102 1.00003 168.918C1.00366 174.153 5.08578 178.194 9.81888 178.195C9.8193 178.195 9.81976 178.195 9.82019 178.195L322.837 177.784H322.839C327.601 177.784 331.659 173.712 331.659 168.911L331.659 168.904L331.659 168.897C332.069 140.035 335.35 111.586 341.502 83.1398L341.505 83.1247L341.509 83.1098C342.595 78.7398 339.688 73.9211 334.888 72.8075Z" stroke="#00D35C" stroke-width="2"/>
          <path d="M218.867 433.748L218.885 433.739L218.903 433.731L357.613 370.795L357.626 370.789L357.64 370.783C361.963 368.972 363.879 363.437 362.015 358.931C350.532 332.131 341.922 304.102 335.773 275.667C334.662 270.84 330.255 267.888 325.464 268.62L185.972 295.761C180.062 297.121 174.259 293.013 172.923 287.191L172.917 287.164L172.912 287.137C169.225 265.723 166.356 244.301 164.717 222.462C164.351 217.673 160.325 213.938 155.103 213.925L10.714 222.149C10.7107 222.149 10.7074 222.149 10.7041 222.15C5.88193 222.528 1.85712 226.623 2.22327 231.776L2.22348 231.779C5.90094 286.002 15.2987 339.406 30.0094 391.991C31.4872 396.8 36.2557 399.4 41.0704 398.298L170.329 360.055C170.33 360.054 170.332 360.054 170.334 360.053C176.19 358.245 182.057 361.434 183.854 367.294C190.387 388.23 198.146 409.168 206.721 429.286C208.971 433.775 214.524 435.931 218.867 433.748Z" stroke="#00D35C" stroke-width="2"/>
        </svg>

        <svg  className="absolute -left-10 h-96 stroke-current stroke-1 text-green-power transform -rotate-180"  width="265" height="436" viewBox="0 0 265 436" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M334.888 72.8075L334.885 72.8069L30.0529 1.23318C30.0524 1.23305 30.0518 1.23291 30.0512 1.23278C25.2702 0.124592 20.495 3.07993 19.3891 7.88005C7.94766 60.8742 1.81787 115.102 1.00003 168.918C1.00366 174.153 5.08578 178.194 9.81888 178.195C9.8193 178.195 9.81976 178.195 9.82019 178.195L322.837 177.784H322.839C327.601 177.784 331.659 173.712 331.659 168.911L331.659 168.904L331.659 168.897C332.069 140.035 335.35 111.586 341.502 83.1398L341.505 83.1247L341.509 83.1098C342.595 78.7398 339.688 73.9211 334.888 72.8075Z" stroke="#00D35C" stroke-width="2"/>
          <path d="M218.867 433.748L218.885 433.739L218.903 433.731L357.613 370.795L357.626 370.789L357.64 370.783C361.963 368.972 363.879 363.437 362.015 358.931C350.532 332.131 341.922 304.102 335.773 275.667C334.662 270.84 330.255 267.888 325.464 268.62L185.972 295.761C180.062 297.121 174.259 293.013 172.923 287.191L172.917 287.164L172.912 287.137C169.225 265.723 166.356 244.301 164.717 222.462C164.351 217.673 160.325 213.938 155.103 213.925L10.714 222.149C10.7107 222.149 10.7074 222.149 10.7041 222.15C5.88193 222.528 1.85712 226.623 2.22327 231.776L2.22348 231.779C5.90094 286.002 15.2987 339.406 30.0094 391.991C31.4872 396.8 36.2557 399.4 41.0704 398.298L170.329 360.055C170.33 360.054 170.332 360.054 170.334 360.053C176.19 358.245 182.057 361.434 183.854 367.294C190.387 388.23 198.146 409.168 206.721 429.286C208.971 433.775 214.524 435.931 218.867 433.748Z" stroke="#00D35C" stroke-width="2"/>
        </svg>

        <svg  className="absolute -right-20 h-96 stroke-current stroke-1 text-green-power"  width="265" height="436" viewBox="0 0 265 436" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M334.888 72.8075L334.885 72.8069L30.0529 1.23318C30.0524 1.23305 30.0518 1.23291 30.0512 1.23278C25.2702 0.124592 20.495 3.07993 19.3891 7.88005C7.94766 60.8742 1.81787 115.102 1.00003 168.918C1.00366 174.153 5.08578 178.194 9.81888 178.195C9.8193 178.195 9.81976 178.195 9.82019 178.195L322.837 177.784H322.839C327.601 177.784 331.659 173.712 331.659 168.911L331.659 168.904L331.659 168.897C332.069 140.035 335.35 111.586 341.502 83.1398L341.505 83.1247L341.509 83.1098C342.595 78.7398 339.688 73.9211 334.888 72.8075Z" stroke="#00D35C" stroke-width="2"/>
          <path d="M218.867 433.748L218.885 433.739L218.903 433.731L357.613 370.795L357.626 370.789L357.64 370.783C361.963 368.972 363.879 363.437 362.015 358.931C350.532 332.131 341.922 304.102 335.773 275.667C334.662 270.84 330.255 267.888 325.464 268.62L185.972 295.761C180.062 297.121 174.259 293.013 172.923 287.191L172.917 287.164L172.912 287.137C169.225 265.723 166.356 244.301 164.717 222.462C164.351 217.673 160.325 213.938 155.103 213.925L10.714 222.149C10.7107 222.149 10.7074 222.149 10.7041 222.15C5.88193 222.528 1.85712 226.623 2.22327 231.776L2.22348 231.779C5.90094 286.002 15.2987 339.406 30.0094 391.991C31.4872 396.8 36.2557 399.4 41.0704 398.298L170.329 360.055C170.33 360.054 170.332 360.054 170.334 360.053C176.19 358.245 182.057 361.434 183.854 367.294C190.387 388.23 198.146 409.168 206.721 429.286C208.971 433.775 214.524 435.931 218.867 433.748Z" stroke="#00D35C" stroke-width="2"/>
        </svg>

      </main>
      <footer className="w-full bg-blue-sky-night text-white">
        <div className="xl:container mx-auto text-center">
          <div className="md:container grid grid-rows-1 md:grid-cols-3 gap-4 md:gap-24 text-left mx-auto py-20" >
            <div className="">
              <h4 className="text-4xl font-black font-serif">Lorem ipsum</h4>
              <p className="py-2">Delectus voluptatem ipsam quibusdam nostrum ab cupiditate officiis quia, deleniti sunt nihil</p>
              <a href="#" className="text-green-power underline">emporibus dolorum</a>
            </div>
            <div className="">
              <h4 className="text-4xl font-black font-serif">Lorem ipsum</h4>
              <p className="py-2">Delectus voluptatem ipsam quibusdam nostrum ab cupiditate officiis quia, deleniti sunt nihil</p>
              <a href="#" className="text-green-power underline">emporibus dolorum</a>
            </div>
            <div className="">
              <h4 className="text-4xl font-black font-serif">Lorem ipsum</h4>
              <p className="py-2">Delectus voluptatem ipsam quibusdam nostrum ab cupiditate officiis quia, deleniti sunt nihil</p>
              <a href="#" className="text-green-power underline">emporibus dolorum</a>
            </div>

          </div>
          <div className="grid grid-rows-1 md:grid-cols-2 py-14">
            <div className="">
              logo logo
            </div>
            <div className=" text-left font-sans grid-cols-2">
              <div>
                <p className="leading-10">Rua Jardim Botânico 518, 5º andar <br/>
                  Jardim Botânico<br/>
                  Rio de Janeiro, RJ – Brasil</p>
              </div>
              <div>
                <p className="">+55 21 3733-2975</p>
              </div>
            </div>
          </div>
        </div>

        {/* <nav className="xl:container mx-auto flex flex-col-reverse md:flex-row md:justify-between border-1 md:px-6 sm:py-2">
          <ul className="justify-center flex pb-6 md:pb-0 text-sm md:text-base font-serif">
            <li className="pr-6"><a href="http://">LinkedIn</a></li>
            <li className="pr-6 "><a href="http://">Facebook</a></li>
          </ul>
        </nav> */}

        <div className=" bg-dark py-3 md:py-0 font-sans">
          <div className="xl:container h-auto mx-auto flex justify-between text-gray-mid md:px-6 py-0.5">
            <p className=""><span className="">Rio Energy®</span> Todos os direitos reservados</p>
            <p className="font-black">Desenvolvido pela AC</p>
          </div>
        </div>
      </footer>
    </>
  )
}
