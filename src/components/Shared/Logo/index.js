import React from 'react'
import SvgHeader from '../Svg/Header'
import SvgFooter from '../Svg/Footer'

export default function Logo ({ withText, color, className, classNameSvg, viewBox, width, height })  {
  const Component = withText ? SvgHeader : SvgFooter

  return (
    <>
      <div className={className}>
        <Component
          className={classNameSvg}
          color={color}
          width={width}
          height={height}
          viewBox={viewBox}
        />
      </div>
    </>
  );
};
