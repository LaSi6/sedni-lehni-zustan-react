import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navClosed, setNavClosed] = useState(true)
    const [trainerClosed, setTrainerClosed] = useState (true)

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
                onScroll={() => setNavClosed(false)}
                ></button>
                <nav className={navClosed ? 'nav-closed' : ''}>
                    {/* <div className="link" 
                    onPointerEnter={() => setTrainerClosed(false)}
                    >Trenéři
                        <div
                        className={trainerClosed ? "nav-trainer nav-closed_trainer" : 'nav-trainer'}>
                            <li>
                                <Link to="/tomasdobias" >Tomáš</ Link>
                            </li>
                            <li>
                                <Link to="/denisaplackova" >Denisa</ Link>
                            </li>
                        </div>
                    </div> */}
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