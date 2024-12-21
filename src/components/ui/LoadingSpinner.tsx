import React from 'react'

function LoadingSpinner() {
  return (
<svg className=' text-inherit animate-spin' width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Interface / Loading">
<g id="Vector">
<path d="M5 14C5 14.5523 5.44772 15 6 15C6.55228 15 7 14.5523 7 14C7 13.4477 6.55228 13 6 13C5.44772 13 5 13.4477 5 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10C19 9.44772 18.5523 9 18 9C17.4477 9 17 9.44772 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>  )
}

export default LoadingSpinner