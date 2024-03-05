import React from 'react'

function NavBarLinks({menuState}) {
  return (
    <div className={`nav-bar-links ${menuState ? 'hidden' : ''} lg:block grow`}>
        <ul className='nav-links flex flex-col lg:flex-row justify-start lg:justify-end items-start lg:items-center gap-3 lg:h-10 cursor-pointer font-semibold text-bluePrim '>
            <li className="link-item">About</li>
            <li className="link-item">Pricing</li>
            <li className="link-item">Hardware</li>
            <li className="link-item">Setup</li>
            <li className="link-item">FAQ's</li>
            <li className="link-item">Reviews</li>
            <li className="link-item">Contact</li>
            <div className="nav-actions flex items-center justify-center gap-3">
            <li className="link-item"><button className='login-btn'>Login</button></li>
            <li className="link-item">Create Account</li>
            </div>
            
        </ul>
    </div>
  )
}

export default NavBarLinks