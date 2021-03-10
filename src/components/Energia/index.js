import React from 'react'

// import Header from '../Shared/Header'
import SmallNumbersInfo from '../Shared/SmallNumbersInfo'
import ClientsPartners from '../Shared/ClientsPartners'
import Footer from '../Shared/Footer'
import Header from '../Shared/Header'
import CardList from './list'
import imageCardFive from '../../assets/images/ilustracao_5.png'
import imageCardSix from '../../assets/images/ilustracao_6.png'
import imageCardSeven from '../../assets/images/ilustracao_7.png'
import imageCardEight from '../../assets/images/ilustracao_8.png'
import imageCardNine from '../../assets/images/ilustracao_9.png'

import logo_1 from '../../assets/images/logo_1.png'
import logo_2 from '../../assets/images/logo_2.png'
import logo_3 from '../../assets/images/logo_3.png'
import logo_4 from '../../assets/images/logo_4.png'
import logo_5 from '../../assets/images/logo_5.png'
import logo_6 from '../../assets/images/logo_6.png'
import logo_7 from '../../assets/images/logo_7.png'
import logo_8 from '../../assets/images/logo_8.png'
import logo_9 from '../../assets/images/logo_9.png'
import logo_10 from '../../assets/images/logo_10.png'

const imgs = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7, logo_8, logo_9, logo_10];

const cards = [
  {
    img: imageCardFive,
    description: 'Geração de energia renovável, proveniente de recursos naturais',
  },
  {
    img: imageCardSix,
    description: 'Eficiência do seu negócio na gestão financeira da compra de energia',
  },
  {
    img: imageCardSeven,
    title: 'Fazemos com responsabilidade social, econômica e ambiental',
    description: 'Valor agregado de ESG à sua matriz, alinhado com práticas internacionais',
  },
  {
    img: imageCardEight,
    description: 'Portfólio de projetos que aproveitam recursos do território brasileiro',
  },
  {
    img: imageCardNine,
    description: 'Soluções customizadas de energia eólica para consumidores no mercado livre, principalmente para contratos de longo prazo',
  },
]

export default function Energia() {
  return (
    <>
      <Header
        className='bg-green-power bg-cover'
        colorLogo="#00D35C"
        image='bg_header_energia.png'
      >
        <div className=" w-3/4 md:ml-24 md:mt-12">
          <h2 className="text-white font-serif font-bold text-7xl ">Energia limpa, futuro sustentável</h2>
          <p className="text-white font-sans font-normal text-xl w-1/2 mt-6">
            Uma empresa de energia renovável preparada para levar altos padrões de qualidade e responsabilidade socioambiental ao entorno dos nossos projetos.
          </p>
        </div>
      </Header>

      <div className="bg-green-light w-full relative" style={{height: '699px'}}>
        <div className="xl:container mx-auto h-full">
          <svg className="absolute inset-1/2 -ml-64 -top-40" style={{height: '500px',width: '500px'}} width="68" height="68" viewBox="0 0 68 68" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.4372 16.9691L51.5668 5.46764C51.6903 5.273 51.9551 5.20222 52.1668 5.32609C54.1257 6.58239 55.9611 8.05104 57.62 9.67893C57.7964 9.83818 57.7964 10.1213 57.62 10.2982L48.0549 19.8533C47.8961 20.0125 47.6137 20.0125 47.4549 19.8533C46.5725 19.0039 45.6019 18.2254 44.5607 17.553C44.3842 17.4291 44.3136 17.1814 44.4372 16.9691Z"/>
            <path d="M58.9961 24.4715L52.8547 26.8072C52.6429 26.8957 52.3959 26.7718 52.3076 26.5595C51.8312 25.3917 51.2664 24.2769 50.5782 23.2152C50.4546 23.0206 50.5076 22.7552 50.7017 22.6313L55.7842 19.1986C55.9783 19.057 56.0313 18.7916 55.8901 18.597C55.3607 17.8361 54.7783 17.0929 54.1783 16.3852C54.0195 16.2082 54.0371 15.9428 54.2136 15.7835L58.8726 11.6253C59.049 11.4661 59.3314 11.4838 59.4902 11.6607C61.0256 13.4302 62.3668 15.3412 63.5139 17.3761C63.6374 17.5884 63.5492 17.8538 63.3374 17.96L58.2196 20.738C58.0078 20.8442 57.9372 21.1096 58.0431 21.3219C58.4843 22.1713 58.8726 23.0206 59.2255 23.9053C59.3314 24.1354 59.2079 24.3831 58.9961 24.4715Z"/>
            <path d="M29.3484 14.4918L26.2777 1.30939C26.2248 1.07937 26.366 0.849336 26.5954 0.796253C28.8719 0.300807 31.2014 0.0176945 33.5309 0C33.778 0 33.9721 0.19464 33.9721 0.424668L33.9544 13.961C33.9544 14.191 33.7603 14.3856 33.5309 14.3856C32.2956 14.4033 31.0779 14.5449 29.8602 14.8103C29.6308 14.8634 29.4014 14.7218 29.3484 14.4918Z"/>
            <path d="M44.9134 9.48429L42.2133 15.4827C42.1251 15.6951 41.8604 15.7835 41.6486 15.6951C40.5015 15.1996 39.3015 14.828 38.0838 14.5626C37.8544 14.5095 37.7132 14.2972 37.7485 14.0672L38.9132 8.03334C38.9662 7.80332 38.8074 7.57329 38.5779 7.5202C37.6603 7.36095 36.7426 7.23709 35.8073 7.16631C35.5778 7.14862 35.4014 6.95398 35.4014 6.70626L35.7543 0.460095C35.772 0.230066 35.9661 0.0354265 36.2132 0.053121C38.5426 0.212372 40.8368 0.619345 43.0957 1.25635C43.3251 1.32713 43.4487 1.55715 43.3957 1.78718L41.7545 7.37865C41.6839 7.60868 41.8075 7.8387 42.0369 7.90948C42.9369 8.19259 43.8369 8.52879 44.7017 8.90037C44.9311 9.00654 45.0193 9.27196 44.9134 9.48429Z"/>
            <path d="M16.9236 23.463L5.45264 16.3144C5.25851 16.1906 5.18792 15.9251 5.31146 15.7128C6.56444 13.7487 8.02919 11.9085 9.65277 10.2452C9.8116 10.0683 10.094 10.0683 10.2704 10.2452L19.8002 19.8356C19.959 19.9949 19.959 20.278 19.8002 20.4372C18.9531 21.322 18.1766 22.2952 17.506 23.3391C17.3824 23.5161 17.1177 23.5869 16.9236 23.463Z"/>
            <path d="M24.4065 8.86497L26.736 15.0227C26.8242 15.235 26.7007 15.4827 26.4889 15.5712C25.3241 16.0489 24.2123 16.6152 23.1535 17.3052C22.9594 17.4291 22.6947 17.376 22.5711 17.1814L19.1475 12.0854C19.0063 11.8907 18.7416 11.8376 18.5475 11.9792C17.7886 12.51 17.0474 13.094 16.3415 13.6956C16.165 13.8548 15.9003 13.8371 15.7415 13.6602L11.5766 8.98883C11.4178 8.81189 11.4355 8.52877 11.6119 8.36952C13.3767 6.8301 15.2826 5.48532 17.3121 4.33518C17.5239 4.21132 17.7886 4.29979 17.8945 4.51212L20.6652 9.64353C20.7711 9.85586 21.0358 9.92664 21.2475 9.82047C22.0946 9.37811 22.9417 8.98883 23.8241 8.63494C24.0712 8.52877 24.3182 8.65264 24.4065 8.86497Z"/>
            <path d="M23.4011 51.031L16.2714 62.5324C16.1479 62.7271 15.8832 62.7978 15.6714 62.674C13.7125 61.4177 11.8772 59.949 10.2183 58.3211C10.0418 58.1619 10.0418 57.8788 10.2183 57.7018L19.7833 48.1468C19.9421 47.9875 20.2245 47.9875 20.3833 48.1468C21.2657 48.9961 22.2363 49.7747 23.2775 50.4471C23.454 50.5709 23.5246 50.8186 23.4011 51.031Z"/>
            <path d="M8.85941 43.5285L15.0008 41.1928C15.2126 41.1044 15.4596 41.2282 15.5479 41.4405C16.0243 42.6084 16.5891 43.7231 17.2773 44.7848C17.4009 44.9795 17.3479 45.2449 17.1538 45.3687L12.0713 48.8015C11.8772 48.943 11.8242 49.2084 11.9654 49.4031C12.4948 50.1639 13.0772 50.9071 13.6772 51.6149C13.836 51.7918 13.8184 52.0573 13.6419 52.2165L8.98294 56.3747C8.80647 56.534 8.52411 56.5163 8.36528 56.3393C6.82993 54.5699 5.48871 52.6589 4.34162 50.624C4.21809 50.4117 4.30632 50.1462 4.5181 50.0401L9.6359 47.262C9.84768 47.1559 9.91827 46.8905 9.81238 46.6781C9.37119 45.8288 8.98294 44.9794 8.62999 44.0947C8.50646 43.8647 8.62999 43.617 8.85941 43.5285Z"/>
            <path d="M38.4898 53.5082L41.5605 66.6907C41.6135 66.9207 41.4723 67.1507 41.2429 67.2038C38.9663 67.6993 36.6368 67.9647 34.325 68.0001C34.0779 68.0001 33.8838 67.8054 33.8838 67.5754L33.9014 54.0391C33.9014 53.809 34.0956 53.6144 34.325 53.6144C35.5603 53.5967 36.778 53.4552 37.9957 53.1897C38.2251 53.1366 38.4369 53.2782 38.4898 53.5082Z"/>
            <path d="M22.9244 58.5158L25.6244 52.5174C25.7127 52.3051 25.9774 52.2166 26.1892 52.3051C27.3363 52.8005 28.5363 53.1721 29.754 53.4375C29.9834 53.4906 30.1246 53.7029 30.0893 53.9329L28.9245 59.9668C28.8716 60.1968 29.0304 60.4268 29.2598 60.4799C30.1775 60.6392 31.0952 60.763 32.0305 60.8338C32.2599 60.8515 32.4364 61.0461 32.4364 61.2939L32.0835 67.54C32.0658 67.77 31.8717 67.9647 31.6246 67.947C29.2951 67.7877 27.0009 67.3808 24.7421 66.7438C24.5126 66.673 24.3891 66.443 24.442 66.2129L26.0833 60.6215C26.1539 60.3914 26.0303 60.1614 25.8009 60.0906C24.9009 59.8075 24.0009 59.4713 23.1361 59.0997C22.9244 58.9936 22.8185 58.7282 22.9244 58.5158Z"/>
            <path d="M50.9137 44.5371L62.3846 51.6857C62.5787 51.8096 62.6493 52.075 62.5258 52.2873C61.2728 54.2514 59.8081 56.0916 58.1845 57.7549C58.0256 57.9319 57.7433 57.9319 57.5668 57.7549L48.0371 48.1645C47.8783 48.0052 47.8783 47.7221 48.0371 47.5629C48.8842 46.6782 49.6607 45.705 50.3313 44.661C50.4548 44.484 50.7195 44.4133 50.9137 44.5371Z"/>
            <path d="M43.4315 59.1351L41.102 52.9774C41.0138 52.7651 41.1373 52.5173 41.3491 52.4289C42.5139 51.9511 43.6257 51.3849 44.6845 50.6948C44.8786 50.5709 45.1434 50.624 45.2669 50.8187L48.7082 55.9147C48.8494 56.1093 49.1141 56.1624 49.3082 56.0209C50.067 55.49 50.8082 54.9061 51.5141 54.3045C51.6906 54.1452 51.9553 54.1629 52.1142 54.3399L56.2613 59.0112C56.4202 59.1882 56.4025 59.4713 56.2261 59.6305C54.4613 61.17 52.5553 62.5147 50.5259 63.6649C50.3141 63.7887 50.0494 63.7003 49.9435 63.4879L47.1728 58.3565C47.0669 58.1442 46.8022 58.0734 46.5905 58.1796C45.7434 58.6219 44.8963 59.0112 44.0139 59.3651C43.7668 59.4713 43.5198 59.3474 43.4315 59.1351Z"/>
            <path d="M53.3844 29.4437L66.5319 26.3648C66.7613 26.3118 66.9907 26.4533 67.0437 26.6833C67.5378 28.9659 67.8025 31.3016 67.8378 33.6196C67.8378 33.8673 67.6437 34.062 67.4143 34.062L53.9139 34.0443C53.6844 34.0443 53.4903 33.8496 53.4903 33.6196C53.4727 32.381 53.3315 31.1601 53.0668 29.9391C53.0138 29.7268 53.155 29.4968 53.3844 29.4437Z"/>
            <path d="M58.3787 45.0502L52.3961 42.343C52.1844 42.2545 52.0961 41.9891 52.1844 41.7767C52.6785 40.6266 53.0491 39.4234 53.3138 38.2024C53.3667 37.9724 53.5785 37.8309 53.8079 37.8663L59.8258 39.0341C60.0552 39.0872 60.2846 38.9279 60.3376 38.6979C60.4964 37.7778 60.6199 36.8577 60.6905 35.9199C60.7082 35.6898 60.9023 35.5129 61.1494 35.5129L67.379 35.8668C67.6084 35.8845 67.8025 36.0791 67.7849 36.3268C67.626 38.6625 67.2201 40.9628 66.5848 43.2277C66.5142 43.4577 66.2848 43.5816 66.0554 43.5285L60.4787 41.8829C60.2493 41.8121 60.0199 41.936 59.9493 42.166C59.667 43.0684 59.3316 43.9709 58.961 44.8379C58.8552 45.0502 58.5904 45.1564 58.3787 45.0502Z"/>
            <path d="M14.4534 38.5563L1.30592 41.6352C1.07651 41.6882 0.847086 41.5467 0.794143 41.3167C0.30001 39.0341 0.0352953 36.6984 0 34.3804C0 34.1327 0.194124 33.938 0.423543 33.938L13.924 33.9557C14.1534 33.9557 14.3475 34.1504 14.3475 34.3804C14.3652 35.619 14.5063 36.8399 14.7711 38.0609C14.824 38.2732 14.6828 38.5032 14.4534 38.5563Z"/>
            <path d="M9.46101 22.9498L15.4436 25.6571C15.6553 25.7455 15.7436 26.0109 15.6553 26.2233C15.1612 27.3734 14.7906 28.5766 14.5259 29.7976C14.4729 30.0276 14.2612 30.1692 14.0317 30.1338L8.01391 28.9659C7.78449 28.9128 7.55507 29.0721 7.50213 29.3021C7.3433 30.2222 7.21977 31.1423 7.14917 32.0802C7.13153 32.3102 6.9374 32.4871 6.69034 32.4871L0.460723 32.1332C0.231303 32.1155 0.0371794 31.9209 0.054827 31.6732C0.213656 29.3375 0.619551 27.0372 1.25487 24.7723C1.32546 24.5423 1.55488 24.4184 1.78429 24.4715L7.36095 26.1171C7.59037 26.1879 7.81978 26.064 7.89038 25.834C8.17274 24.9316 8.50804 24.0292 8.87864 23.1621C8.98453 22.9498 9.24924 22.8436 9.46101 22.9498Z"/>
          </svg>

          <svg className="absolute inset-1/2 -ml-44 mt-6 left-1/2"  style={{height: '300px',width: '300px'}}  width="68" height="68"  viewBox="0 0 68 68" fill="#00D35C" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.4372 16.9691L51.5668 5.46764C51.6903 5.273 51.9551 5.20222 52.1668 5.32609C54.1257 6.58239 55.9611 8.05104 57.62 9.67893C57.7964 9.83818 57.7964 10.1213 57.62 10.2982L48.0549 19.8533C47.8961 20.0125 47.6137 20.0125 47.4549 19.8533C46.5725 19.0039 45.6019 18.2254 44.5607 17.553C44.3842 17.4291 44.3136 17.1814 44.4372 16.9691Z"/>
            <path d="M58.9961 24.4715L52.8547 26.8072C52.6429 26.8957 52.3959 26.7718 52.3076 26.5595C51.8312 25.3917 51.2664 24.2769 50.5782 23.2152C50.4546 23.0206 50.5076 22.7552 50.7017 22.6313L55.7842 19.1986C55.9783 19.057 56.0313 18.7916 55.8901 18.597C55.3607 17.8361 54.7783 17.0929 54.1783 16.3852C54.0195 16.2082 54.0371 15.9428 54.2136 15.7835L58.8726 11.6253C59.049 11.4661 59.3314 11.4838 59.4902 11.6607C61.0256 13.4302 62.3668 15.3412 63.5139 17.3761C63.6374 17.5884 63.5492 17.8538 63.3374 17.96L58.2196 20.738C58.0078 20.8442 57.9372 21.1096 58.0431 21.3219C58.4843 22.1713 58.8726 23.0206 59.2255 23.9053C59.3314 24.1354 59.2079 24.3831 58.9961 24.4715Z"/>
            <path d="M29.3484 14.4918L26.2777 1.30939C26.2248 1.07937 26.366 0.849336 26.5954 0.796253C28.8719 0.300807 31.2014 0.0176945 33.5309 0C33.778 0 33.9721 0.19464 33.9721 0.424668L33.9544 13.961C33.9544 14.191 33.7603 14.3856 33.5309 14.3856C32.2956 14.4033 31.0779 14.5449 29.8602 14.8103C29.6308 14.8634 29.4014 14.7218 29.3484 14.4918Z"/>
            <path d="M44.9134 9.48429L42.2133 15.4827C42.1251 15.6951 41.8604 15.7835 41.6486 15.6951C40.5015 15.1996 39.3015 14.828 38.0838 14.5626C37.8544 14.5095 37.7132 14.2972 37.7485 14.0672L38.9132 8.03334C38.9662 7.80332 38.8074 7.57329 38.5779 7.5202C37.6603 7.36095 36.7426 7.23709 35.8073 7.16631C35.5778 7.14862 35.4014 6.95398 35.4014 6.70626L35.7543 0.460095C35.772 0.230066 35.9661 0.0354265 36.2132 0.053121C38.5426 0.212372 40.8368 0.619345 43.0957 1.25635C43.3251 1.32713 43.4487 1.55715 43.3957 1.78718L41.7545 7.37865C41.6839 7.60868 41.8075 7.8387 42.0369 7.90948C42.9369 8.19259 43.8369 8.52879 44.7017 8.90037C44.9311 9.00654 45.0193 9.27196 44.9134 9.48429Z"/>
            <path d="M16.9236 23.463L5.45264 16.3144C5.25851 16.1906 5.18792 15.9251 5.31146 15.7128C6.56444 13.7487 8.02919 11.9085 9.65277 10.2452C9.8116 10.0683 10.094 10.0683 10.2704 10.2452L19.8002 19.8356C19.959 19.9949 19.959 20.278 19.8002 20.4372C18.9531 21.322 18.1766 22.2952 17.506 23.3391C17.3824 23.5161 17.1177 23.5869 16.9236 23.463Z"/>
            <path d="M24.4065 8.86497L26.736 15.0227C26.8242 15.235 26.7007 15.4827 26.4889 15.5712C25.3241 16.0489 24.2123 16.6152 23.1535 17.3052C22.9594 17.4291 22.6947 17.376 22.5711 17.1814L19.1475 12.0854C19.0063 11.8907 18.7416 11.8376 18.5475 11.9792C17.7886 12.51 17.0474 13.094 16.3415 13.6956C16.165 13.8548 15.9003 13.8371 15.7415 13.6602L11.5766 8.98883C11.4178 8.81189 11.4355 8.52877 11.6119 8.36952C13.3767 6.8301 15.2826 5.48532 17.3121 4.33518C17.5239 4.21132 17.7886 4.29979 17.8945 4.51212L20.6652 9.64353C20.7711 9.85586 21.0358 9.92664 21.2475 9.82047C22.0946 9.37811 22.9417 8.98883 23.8241 8.63494C24.0712 8.52877 24.3182 8.65264 24.4065 8.86497Z"/>
            <path d="M23.4011 51.031L16.2714 62.5324C16.1479 62.7271 15.8832 62.7978 15.6714 62.674C13.7125 61.4177 11.8772 59.949 10.2183 58.3211C10.0418 58.1619 10.0418 57.8788 10.2183 57.7018L19.7833 48.1468C19.9421 47.9875 20.2245 47.9875 20.3833 48.1468C21.2657 48.9961 22.2363 49.7747 23.2775 50.4471C23.454 50.5709 23.5246 50.8186 23.4011 51.031Z"/>
            <path d="M8.85941 43.5285L15.0008 41.1928C15.2126 41.1044 15.4596 41.2282 15.5479 41.4405C16.0243 42.6084 16.5891 43.7231 17.2773 44.7848C17.4009 44.9795 17.3479 45.2449 17.1538 45.3687L12.0713 48.8015C11.8772 48.943 11.8242 49.2084 11.9654 49.4031C12.4948 50.1639 13.0772 50.9071 13.6772 51.6149C13.836 51.7918 13.8184 52.0573 13.6419 52.2165L8.98294 56.3747C8.80647 56.534 8.52411 56.5163 8.36528 56.3393C6.82993 54.5699 5.48871 52.6589 4.34162 50.624C4.21809 50.4117 4.30632 50.1462 4.5181 50.0401L9.6359 47.262C9.84768 47.1559 9.91827 46.8905 9.81238 46.6781C9.37119 45.8288 8.98294 44.9794 8.62999 44.0947C8.50646 43.8647 8.62999 43.617 8.85941 43.5285Z"/>
            <path d="M38.4898 53.5082L41.5605 66.6907C41.6135 66.9207 41.4723 67.1507 41.2429 67.2038C38.9663 67.6993 36.6368 67.9647 34.325 68.0001C34.0779 68.0001 33.8838 67.8054 33.8838 67.5754L33.9014 54.0391C33.9014 53.809 34.0956 53.6144 34.325 53.6144C35.5603 53.5967 36.778 53.4552 37.9957 53.1897C38.2251 53.1366 38.4369 53.2782 38.4898 53.5082Z"/>
            <path d="M22.9244 58.5158L25.6244 52.5174C25.7127 52.3051 25.9774 52.2166 26.1892 52.3051C27.3363 52.8005 28.5363 53.1721 29.754 53.4375C29.9834 53.4906 30.1246 53.7029 30.0893 53.9329L28.9245 59.9668C28.8716 60.1968 29.0304 60.4268 29.2598 60.4799C30.1775 60.6392 31.0952 60.763 32.0305 60.8338C32.2599 60.8515 32.4364 61.0461 32.4364 61.2939L32.0835 67.54C32.0658 67.77 31.8717 67.9647 31.6246 67.947C29.2951 67.7877 27.0009 67.3808 24.7421 66.7438C24.5126 66.673 24.3891 66.443 24.442 66.2129L26.0833 60.6215C26.1539 60.3914 26.0303 60.1614 25.8009 60.0906C24.9009 59.8075 24.0009 59.4713 23.1361 59.0997C22.9244 58.9936 22.8185 58.7282 22.9244 58.5158Z"/>
            <path d="M50.9137 44.5371L62.3846 51.6857C62.5787 51.8096 62.6493 52.075 62.5258 52.2873C61.2728 54.2514 59.8081 56.0916 58.1845 57.7549C58.0256 57.9319 57.7433 57.9319 57.5668 57.7549L48.0371 48.1645C47.8783 48.0052 47.8783 47.7221 48.0371 47.5629C48.8842 46.6782 49.6607 45.705 50.3313 44.661C50.4548 44.484 50.7195 44.4133 50.9137 44.5371Z"/>
            <path d="M43.4315 59.1351L41.102 52.9774C41.0138 52.7651 41.1373 52.5173 41.3491 52.4289C42.5139 51.9511 43.6257 51.3849 44.6845 50.6948C44.8786 50.5709 45.1434 50.624 45.2669 50.8187L48.7082 55.9147C48.8494 56.1093 49.1141 56.1624 49.3082 56.0209C50.067 55.49 50.8082 54.9061 51.5141 54.3045C51.6906 54.1452 51.9553 54.1629 52.1142 54.3399L56.2613 59.0112C56.4202 59.1882 56.4025 59.4713 56.2261 59.6305C54.4613 61.17 52.5553 62.5147 50.5259 63.6649C50.3141 63.7887 50.0494 63.7003 49.9435 63.4879L47.1728 58.3565C47.0669 58.1442 46.8022 58.0734 46.5905 58.1796C45.7434 58.6219 44.8963 59.0112 44.0139 59.3651C43.7668 59.4713 43.5198 59.3474 43.4315 59.1351Z"/>
            <path d="M53.3844 29.4437L66.5319 26.3648C66.7613 26.3118 66.9907 26.4533 67.0437 26.6833C67.5378 28.9659 67.8025 31.3016 67.8378 33.6196C67.8378 33.8673 67.6437 34.062 67.4143 34.062L53.9139 34.0443C53.6844 34.0443 53.4903 33.8496 53.4903 33.6196C53.4727 32.381 53.3315 31.1601 53.0668 29.9391C53.0138 29.7268 53.155 29.4968 53.3844 29.4437Z"/>
            <path d="M58.3787 45.0502L52.3961 42.343C52.1844 42.2545 52.0961 41.9891 52.1844 41.7767C52.6785 40.6266 53.0491 39.4234 53.3138 38.2024C53.3667 37.9724 53.5785 37.8309 53.8079 37.8663L59.8258 39.0341C60.0552 39.0872 60.2846 38.9279 60.3376 38.6979C60.4964 37.7778 60.6199 36.8577 60.6905 35.9199C60.7082 35.6898 60.9023 35.5129 61.1494 35.5129L67.379 35.8668C67.6084 35.8845 67.8025 36.0791 67.7849 36.3268C67.626 38.6625 67.2201 40.9628 66.5848 43.2277C66.5142 43.4577 66.2848 43.5816 66.0554 43.5285L60.4787 41.8829C60.2493 41.8121 60.0199 41.936 59.9493 42.166C59.667 43.0684 59.3316 43.9709 58.961 44.8379C58.8552 45.0502 58.5904 45.1564 58.3787 45.0502Z"/>
            <path d="M14.4534 38.5563L1.30592 41.6352C1.07651 41.6882 0.847086 41.5467 0.794143 41.3167C0.30001 39.0341 0.0352953 36.6984 0 34.3804C0 34.1327 0.194124 33.938 0.423543 33.938L13.924 33.9557C14.1534 33.9557 14.3475 34.1504 14.3475 34.3804C14.3652 35.619 14.5063 36.8399 14.7711 38.0609C14.824 38.2732 14.6828 38.5032 14.4534 38.5563Z"/>
            <path d="M9.46101 22.9498L15.4436 25.6571C15.6553 25.7455 15.7436 26.0109 15.6553 26.2233C15.1612 27.3734 14.7906 28.5766 14.5259 29.7976C14.4729 30.0276 14.2612 30.1692 14.0317 30.1338L8.01391 28.9659C7.78449 28.9128 7.55507 29.0721 7.50213 29.3021C7.3433 30.2222 7.21977 31.1423 7.14917 32.0802C7.13153 32.3102 6.9374 32.4871 6.69034 32.4871L0.460723 32.1332C0.231303 32.1155 0.0371794 31.9209 0.054827 31.6732C0.213656 29.3375 0.619551 27.0372 1.25487 24.7723C1.32546 24.5423 1.55488 24.4184 1.78429 24.4715L7.36095 26.1171C7.59037 26.1879 7.81978 26.064 7.89038 25.834C8.17274 24.9316 8.50804 24.0292 8.87864 23.1621C8.98453 22.9498 9.24924 22.8436 9.46101 22.9498Z"/>
          </svg>

        </div>
        <div className="-mt-80 relative left-16 z-10">
          <h2 className="text-blue-sky-night text-4xl font-serif pb-10">Tornamos sua<br/> operação mais limpa</h2>
          <CardList data={cards} />
        </div>
      </div>

      <div className="xl:container mx-auto pt-40">
        <div className="grid grid-cols-1 gap-4 md:mx-64 md:my-12 justify-items-stretch">
          <div className="justify-self-center md:justify-self-start">
          <h2 className="text-green-power font-serif text-8xl">Nossa energia<br />em números</h2>

          </div>
          <div className="justify-self-center md:justify-self-end">
            <SmallNumbersInfo
              type="h1"
              value="1GW"
              desc="de projetos em operação e implantação"
            />
          </div>
          <div className="justify-self-center md:justify-self-end" >
            <SmallNumbersInfo
              type="h1"
              value="1.5GW"
              desc="de projetos em desenvolvimento"
            />
          </div>
          <div className="justify-self-center md:justify-self-start" >
            <SmallNumbersInfo
              dollar='+'
              value='3,1'
              rest='bi'
              desc='de investimentos em ativos no país'
            />
          </div>
          <div className="justify-self-center md:justify-self-start" >
            <SmallNumbersInfo
              dollar='+'
              value='12,5'
              rest='mi'
              desc='destinados a programas sociais'
            />
          </div>
          <div className="justify-self-center md:justify-self-start" >
            <SmallNumbersInfo
              dollar='+'
              value='835,2'
              rest='ton'
              desc='de investimentos em ativos no país'
            />
          </div>
        </div>

      </div>
      <div className="xl:container mx-auto">
        <div className="bg-green-power mb-12" >
          <div className="xl:container mx-auto py-5 px-10 md:py-10 md:px-20">
            <h4 className="text-blue-sky-night font-serif pb-8 text-2xl md:w-1/2 md:ml-14 text-center md:text-right md:text-6xl mt-8">Conheça nossos<br /> diferenciais</h4>
            <div className="grid grid-cols-2 ml-96">
              <div className="text-base text-green-light border-t-2 border-fuchsia-600 mr-6 mb-16">
                <h5 className="text-white font-serif text-2xl font-bold mt-3">Soluções que fazem sentido para o cliente</h5>
                <p className="text-white text-lg font-sans font-normal mt-1">Oferecemos soluções customizadas em energia eólica para grandes consumidores no mercado livre, principalmente para contratos de longo prazo.</p>
              </div>
              <div className="text-base text-green-light border-t-2 border-fuchsia-600 mr-6">
                <h5 className="text-white font-serif text-2xl font-bold mt-3">Expertise em energia renovável</h5>
                <p className="text-white text-lg font-sans font-normal mt-1">Temos uma experiência sólida no setor e um histórico de desenvolvimento, construção e operação de projetos de energia renovável com altos padrões de qualidade.</p>
              </div>
              <div className="text-base text-green-light border-t-2 border-fuchsia-600 mr-6 mb-16">
                <h5 className="text-white font-serif text-2xl font-bold mt-3">Melhores práticas de ESG</h5>
                <p className="text-white text-lg font-sans font-normal mt-1">Somos uma empresa signatária do Pacto Global, comprometida com as diretrizes de direitos humanos, trabalho, meio ambiente e anticorrupção.</p>
              </div>
              <div className="text-base text-green-light border-t-2 border-fuchsia-600 mr-6">
                <h5 className="text-white font-serif text-2xl font-bold mt-3">Time de especialistas</h5>
                <p className="text-white text-lg font-sans font-normal mt-1">Nosso time conta com profissionais reconhecidos no mercado e mais de 12GW de experiência combinada em projetos hidrelétricos, eólicos e solares.</p>
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
