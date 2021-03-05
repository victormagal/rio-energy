import React from 'react'
import SvgHeader from '../Svg/Header'
import SvgFooter from '../Svg/Footer'

export default function Logo ({ withText, color, className, width, height })  {
  const Component = withText ? SvgHeader : SvgFooter

  return (
    <>
      <div className={className}>
        <Component
          color={color}
          width={width}
          height={height}
        />
      </div>
    </>
  );
};
