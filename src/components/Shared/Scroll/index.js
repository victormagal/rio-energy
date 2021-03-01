import React from 'react'
export default function Scroll({ children, className }) {
  className = `slider xl:container flex flex-nowrap overflow-x-scroll scrolling-touch justify-items-stretch ${className}`

  return (
    <div className={className}>{children}</div>
  )
}
