import React, { useState } from 'react'
import SvgLogo from '../Logo'
import Menu from './Menu'
import MenuComponent from '../Menu'
import { Link } from 'react-router-dom';

export default function Header({ image, className, children, colorLogo }) {
  const style = {};

  const [openMenu, setOpenMenu] = useState(false)

  const handleToggleMenu = () => setOpenMenu((previous) => !previous)

  if (image) {
    style.backgroundImage = `url('${image}')`
    style.backgroundPosition = 'center center'
    style.backgroundRepeat = 'no-repeat'
  }

  return (
    <>
      {openMenu && <MenuComponent />}
      <div style={{ height: '653px', ...style }} className={`cover header ${className || ''}`}>
        <div className="md:container mx-auto md:pl-10 h-48 min-h-full">
          <div className="relative">
            <Link to="/">
              <SvgLogo
                withText={true}
                color={colorLogo}
                width={177}
                height={68}
                viewBox="-10 200 520 100"
                className="inline-block fill-current relative z-50"
              />
            </Link>
            <Menu openMenu={handleToggleMenu} />
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>

    </>
  )
}
