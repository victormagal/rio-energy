import React from 'react'

import Header from '../Shared/Header'
import Subheader from '../Home/Subheader'
import Player from '../Home/Player'
import Button from '../Shared/Button'
// import Menu from '../Shared/Menu'
import Subfooter from '../Shared/Subfooter'
import Footer from '../Shared/Footer'
import Title from '../Shared/Header/title'

export default function Home() {
  const printBtnLabel = (e) => {
    console.log(e.target.name);
  }
  return (
    <>
    {/* <Menu>
    </Menu> */}
      <Header>
        <Title className="hello" titulo="Rio Energy.Por um futuro mais limpo" />
      </Header>
      <Subheader />

      <Subfooter />
      <Footer />
    </>
  )
}
