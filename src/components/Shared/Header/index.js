import React, { useEffect, useState } from 'react'
import SvgLogo from '../Logo'
import Menu from './Menu'
import MenuComponent from '../Menu'
import { Link } from 'react-router-dom';

export default function Header({ image, className, children, colorLogo }) {
  const style = {};

  const [openMenu, setOpenMenu] = useState(false)

  const [bgLogo, setBgLogo] = useState(colorLogo)

  const handleToggleMenu = () => setOpenMenu((previous) => !previous)

  useEffect(() => {
    openMenu ? setBgLogo('white') : setBgLogo(colorLogo)
  }, [openMenu])

  const renderCloseMenu = () => {
    return (
      <button
        onClick={handleToggleMenu}
        className="relative z-50 text-lg text-white font-bold"
      >
        X
      </button>
    )
  }

  if (image) {
    style.backgroundImage = `url('${image}')`
    style.backgroundPosition = 'center center'
    style.backgroundRepeat = 'no-repeat'
  }

  return (
    <>
      {openMenu && <MenuComponent />}
      <div style={{ height: '720px', ...style }} className={className || ''}>
        <div className={`cover header xl:container mx-auto grid grid-cols-12 gap-4 pt-8`}>
          <div className="col-span-11 relative z-50">
            <Link to="/">
              <SvgLogo
                withText={true}
                color={bgLogo}
                width={177}
                height={68}
                viewBox="-10 200 520 100"
                className="inline-block fill-current"
              />
            </Link>
          </div>
          <div className="col-span-1 flex justify-end py-4">
            {openMenu ? renderCloseMenu() : <Menu openMenu={handleToggleMenu} /> }
          </div>
        </div>
        <div className="grid grid-cols-12 xl:container mx-auto gap-4">
          {children}
        </div>
      </div>
    </>
  )
}
