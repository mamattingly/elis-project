import '../styles/HeaderStyles.css'

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';


export default function Header() {
    const { pathname } = useLocation();
    const [burger, setBurger] = useState(false);
    const toggleBurger = () => setBurger(!burger);

    useEffect(() => {
        setBurger(false);
    }, [pathname]);

    return (
        <header>
            <nav>
                <ul className={burger ? "nav-menu active" : "nav-menu"}>
                    <li><Link to="/" className={pathname === "/" ? "active-nav-item" : "nav-item"}>Home</Link></li>
                    <li><Link to="about" className={pathname === "/about" ? "active-nav-item" : "nav-item"}>About</Link></li>
                    <li><Link to="contact" className={pathname === "/contact" ? "active-nav-item" : "nav-item"}>Contact</Link></li>
                </ul>
                <div className="burger" onClick={toggleBurger}>
                    {burger ? <IoCloseOutline /> : <IoMenuOutline />}
                </div>
            </nav>
        </header>
    )
}