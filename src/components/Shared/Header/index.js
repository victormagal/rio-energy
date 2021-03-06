import React from 'react'
import SvgLogo from '../Logo'

export default function Header({ image, className, children, colorLogo }) {
  const style = {};

  if (image) {
    style.backgroundImage = `url('${image}')`
    style.backgroundPosition = 'center center'
    style.backgroundRepeat = 'no-repeat'
  }

  return (
    <>
      <div style={{ height: '695px' }} className={`header ${className || ''}`}>
        <div style={style} className="cover md:container mx-auto md:pl-10 h-48 min-h-full">
          <div>
            <SvgLogo
              withText={true}
              color={colorLogo}
              width={120}
              height={120}
              viewBox="0 0 500 500"
              className="inline-block fill-current"
            />
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
