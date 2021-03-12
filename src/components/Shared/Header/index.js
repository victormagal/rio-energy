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
      <div style={{ height: '720px', ...style }} className={className || ''}>
        <div className={`cover header grid grid-cols-12 pt-8 xl:container mx-auto gap-4`}>
          <div className="col-span-11">
            <Link to="/">
              <SvgLogo
                withText={true}
                color={colorLogo}
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
