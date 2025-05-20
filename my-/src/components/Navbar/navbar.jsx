import React from 'react'
import './navbar.css'
import c from "../../assets/c.png"
import contact from "../../assets/contact.png"
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={c} alt="Logo" className='logo'/>
        <div className="desktopMenu">
            <Link className="desktopMenuListItem">Home</Link>
            <Link className="desktopMenuListItem">About</Link>
            <Link className="desktopMenuListItem">Portfolio</Link>
            <Link className="desktopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn">
            <img src={contact} alt="" className="desktopMenuImg" />Contact Me</button>
    </nav>
  )
}

export default Navbar
