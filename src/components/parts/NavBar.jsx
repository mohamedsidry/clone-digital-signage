import React, { useRef, useState } from 'react'
import brandIcon from '../../assets/icons/brandicon.png'
import menuIcon from '../../assets/icons/menu-icon.svg'
import NavBarLinks from './NavBarLinks'
function NavBar() {

    
    const [menuState, SetmenuState] = useState({isActive : false});
    const menuHandler = (e)=>{
        SetmenuState((prev)=>!prev);
    }
  return (
    <nav className='nav-bar  container mx-auto py-2 px-4 lg:rounded-full shadow-md'>
        <div className="nav-content  flex flex-col lg:flex-row justify-between items-start">
            <div className="nav-brand flex items-center justify-between gap-2">
                <img className='w-10 h-10' src={brandIcon} alt="brand logo" />
                <a className='text-2xl font-bold text-orangePrim ' href="/">BrandName</a>
            </div>
            <NavBarLinks menuState = {menuState}></NavBarLinks>
            <button className='absolute right-4 block lg:hidden' id='menuBtn' onClick={menuHandler}>
                <img className='w-10 h-10  ' src={menuIcon} alt='menu icon' />
            </button>
            
        </div>
    </nav>
  )
}

export default NavBar