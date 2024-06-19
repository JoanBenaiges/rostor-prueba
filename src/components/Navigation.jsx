import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({ language, toggleLanguage }) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className='navigation'>
            <nav>
                <div className='logo'></div>
                <div className="nav-container">
                    <div className="menu-icon" onClick={toggleMenu}>☰</div>
                    <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                        <li><Link to='/'>{language === 'en' ? 'Home' : 'Inicio'}</Link></li>
                        <li><Link to='/about-me'>{language === 'en' ? 'About Us' : 'Sobre nosotros'}</Link></li>
                        <li><Link to='/projects'>{language === 'en' ? 'Our products' : 'Nuestros productos'}</Link></li>
                        <li><Link to='/contact-me'>{language === 'en' ? 'Contact Us' : 'Contáctame'}</Link></li>
                    </ul>
                </div>
                <button className={`language-btn ${language === 'en' ? 'english' : 'spanish'}`} onClick={toggleLanguage}>

                </button>
            </nav>
        </div>
    );
}

export default Navigation;