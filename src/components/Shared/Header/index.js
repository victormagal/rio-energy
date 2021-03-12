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

  if (image) {
    style.backgroundImage = `url('${image}')`
    style.backgroundPosition = 'center center'
    style.backgroundRepeat = 'no-repeat'
  }

  return (
    <>
      {openMenu && <MenuComponent />}
      <div style={{ height: '720px', ...style }} className={className || ''}>
        <div className={`cover header grid grid-cols-12 pt-8 xl:container mx-auto gap-4`}>
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
          <div className="justify-self-end">
            <Menu openMenu={handleToggleMenu} />
          </div>
        </div>
        <div className="grid grid-cols-12 xl:container mx-auto gap-4">
          {children}
        </div>
      </div>
    </>
  )
}
