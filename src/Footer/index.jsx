import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="bottombar">
            <div className="footer-trainers">
                <ul>Trenéři a rezervace lekcí:
                    <li>
                        <Link to="/denisaplackova" className='footer-link'>Denisa</Link>
                    </li>
                    <li>
                        <Link to="/tomasdobias" className='footer-link'>Tomáš</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-location">
                Trenéři se pohybují v Praze, Praze-východ a východní části Středočeského kraje. Můžete se podívat na naši
                <Link to="mapa" className='footer-link'>psí mapu.</Link>
            </div>
            <div className="footer-contacts">
                <ul>Kontakty
                    <li>Denisa <a href="tel:+420777303211" className='footer-link'>+420 777 303 211</a></li>
                    <li>Tomáš <a href="tel:+420736177353" className='footer-link'>+420 736 177 353</a></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer