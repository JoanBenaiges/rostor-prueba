import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation({ language, toggleLanguage }) {
    const [showMenu, setShowMenu] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setShowMenu(false);
        setIsMenuOpen(false);
    };

    return (
        <div className='navigation'>
            <nav>
                <div className='logo'></div>
                <div className="nav-container">
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isMenuOpen ? '✖' : '☰'}
                    </div>
                    <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                        <li><Link to='/'>{language === 'en' ? 'Home' : 'Inicio'}</Link></li>
                        <li><Link to='/about-us'>{language === 'en' ? 'About Us' : 'Sobre nosotros'}</Link></li>
                        <li><Link to='/our-products'>{language === 'en' ? 'Our products' : 'Nuestros productos'}</Link></li>
                        <li><Link to='/contact'>{language === 'en' ? 'Contact Us' : 'Contáctanos'}</Link></li>
                        <div className="close-icon" onClick={closeMenu}>✖</div>
                    </ul>
                </div>
                <button className={`language-btn ${language === 'en' ? 'english' : 'spanish'}`} onClick={toggleLanguage}></button>
            </nav>
        </div>
    );
}

export default Navigation;
