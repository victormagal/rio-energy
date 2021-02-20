import React from 'react';

const Footer = () => {
  return (
    <>
      <footer class="w-full bg-gray-900 text-white">
        <div class="text-center">
          <img class="box-border h-20 w-20 border-2 inline-block" img="" alt="Logo Rio Energy Footer"/>
          <h3  class="text-center text-green-light p-6">Vamos conversar?</h3>
          <div class="box-border h-30 w-60 p-4 border-4 mx-8  inline-block"></div>
        </div>

        <div class="flex justify-between">
          <ul class="flex justify-around">
            <li><a href="http://">LinkedIn</a></li>
            <li><a href="http://">Facebook</a></li>
          </ul>
          <ul class="flex justify-between">
            <li class="pl-2"><a href="http://">Quem somos</a></li>
            <li class="pl-2"><a href="http://">Início</a></li>
            <li class="pl-2"><a href="http://">Nossa energia</a></li>
            <li class="pl-2"><a href="http://">Nosso impacto</a></li>
            <li class="pl-2"><a href="http://">Carreira</a></li>
            <li class="pl-2"><a href="http://">Investidores</a></li>
            <li class="pl-2"><a href="http://">Contato</a></li>
          </ul>
        </div>


        <div class="h-auto border-1 border flex justify-between">
          <p class="">Rio Energy® Todos os direitos reservados</p>
          <p class="">Desenvolvido pela AC</p>
        </div>

      </footer>
    </>
  )
}

export default Footer;