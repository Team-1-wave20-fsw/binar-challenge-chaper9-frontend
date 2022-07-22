import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import styles from './NavBar.css';

function NavBar() {
    const navRef = useRef();

    const showNavbar = () =>{
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <header>
            <h3>LOGO</h3>
            <nav ref={navRef}>
                <a href='/'>HOME</a>
                <a href='/#'>GAME LIST</a>
                <a href='/Profile'>PROFILE</a>
                <a href='/Register'>SIGN UP</a>
                <a href='/Login'>LOGIN</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    )
}

export default NavBar;