import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [navClosed, setNavClosed] = useState(true)

    const { pathname } = useLocation();

  useEffect(() => {
    setNavClosed(true);
    window.scrollTo(0, 0);
  }, [pathname, setNavClosed]);

return(
    <header>
        <div className="topbar-container">
            <Link to="/">
                <div className="site-logo" >
                </div>
            </ Link>
            <div className="navigation" >
                <button id="nav-btn" className="nav-btn"
                    onClick={() => setNavClosed(!navClosed)}
                ></button>
                <nav className={navClosed ? 'nav-closed' : ''}>
                    <Link to="/tomasdobias" className="link">Trenér Tomáš</ Link>
                    <Link to="/denisaplackova" className="link">Trenérka Denisa</ Link>
                    <Link to="/mapa" className="link">Psí mapa</ Link>
                    <Link to="/kontakty" className="link">Kontakty</ Link>
                </nav>
            </div>
        </div>
    </header>
)};

export default Header