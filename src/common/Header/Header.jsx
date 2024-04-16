import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <header className='header.class'>
        <div className='wrapper'>
            <nav>
                <ul className='menu'>
                    <li>
                        <a href=''>Shop</a>
                    </li>
                    <li>
                        <a href=''>Contact</a>
                    </li>
                </ul>

            </nav>
        </div>

    </header>
  )
}

export default Header