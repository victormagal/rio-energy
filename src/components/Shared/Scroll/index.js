import React from 'react'
export default function Scroll({ children, className }) {
  className = `slider flex flex-nowrap overflow-x-scroll no-scrollbar scrolling-touch justify-items-stretch ${className || ''}`

  return (
    <div className={className}>{children}</div>
  )
}
