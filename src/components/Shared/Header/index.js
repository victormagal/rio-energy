import React from 'react'
import SvgLogo from '../Logo'

export default function Header({ image, className, children, colorLogo, middle }) {
  const style = {
    height: '35.67rem'
  };

  if (image) {
    style.backgroundImage = `url('${image}')`
    style.backgroundRepeat = 'no-repeat'
    style.backgroundSize = 'cover'
  }

  return (
    <>
      <div style={style} className={`header ${className || ''}`}>
        <div className="md:container mx-auto md:pl-10 h-48 min-h-full">
          <div className="flex">
            <SvgLogo
              withText={true}
              color={colorLogo}
              width={120}
              height={120}
              viewBox="0 0 500 500"
              className="inline-block fill-current"
            />
            {middle}
          </div>
          <div>
            {children}
          </div>
        </div>

        <div className="menu absolute">
          <button className="menu">X</button>
          <button className="fale-conosco">...</button>
        </div>
      </div>

    </>
  )
}
