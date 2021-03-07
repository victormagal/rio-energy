import React from 'react'
import './menu.style.css'

export default function Menu({ color = '#00D35C' }) {
  return (
    <div className="bg-white rounded-full border border-green-power absolute menu top-0 right-0 mr-32 mt-10 pt-3 pl-2">
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0859375 1.80004C0.0859375 0.979508 0.751114 0.314331 1.57165 0.314331H16.4288C17.2493 0.314331 17.9145 0.979508 17.9145 1.80004C17.9145 2.62058 17.2493 3.28576 16.4288 3.28576H1.57165C0.751116 3.28576 0.0859375 2.62058 0.0859375 1.80004ZM4.86145 7.7429C4.86145 6.92236 5.52662 6.25719 6.34716 6.25719H16.4288C17.2493 6.25719 17.9145 6.92236 17.9145 7.7429C17.9145 8.56344 17.2493 9.22861 16.4288 9.22861H6.34716C5.52662 9.22861 4.86145 8.56344 4.86145 7.7429ZM10.3533 13.6858C10.3533 12.8652 11.0185 12.2 11.839 12.2H16.4288C17.2493 12.2 17.9145 12.8652 17.9145 13.6858C17.9145 14.5063 17.2493 15.1715 16.4288 15.1715H11.839C11.0185 15.1715 10.3533 14.5063 10.3533 13.6858Z" fill={color} />
      </svg>
    </div>
  )
}
