import React from 'react'
import SvgLogo from '../Logo'

export default function Header({ image, className, classNameChildren, children, colorLogo, middle }) {
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
              className="inline-block fill-current mt-7 w-auto h-auto"
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
