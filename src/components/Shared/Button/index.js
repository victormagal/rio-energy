import React from 'react'
import { Link } from 'react-router-dom'

export default function BtnGroup ({ children, colorSvg = 'green-light', href, onClick, color, newClasses = [], classes, removeClass = [] })  {
  const defaultClasses = [
    'h-30',
    'w-60',
    'border-2',
    'rounded-full',
    'mb-7',
    'ring-transparent',
    'ring-current',
    'font-sans',
    'font-semibold',
    `border-${color}`,
    'p-3',
    'inline-block',
    'text-center',
    'focus:outline-none'
  ]

  classes = classes || [...defaultClasses, ...newClasses];

  for (const class$ of removeClass) {
    if (classes.indexOf(class$) !== -1) {
      classes.splice(classes.indexOf(class$), 1)
    }
  }

  let element = React.createElement('button').type
  const props = {
    className: classes.join(' '),
    onClick,
  }

  if (href) {
    props.to = href
    element = Link
  }

  return (
    <element {...props}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`inline ml-3 h-5 text-${colorSvg}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </element>
  );
};


