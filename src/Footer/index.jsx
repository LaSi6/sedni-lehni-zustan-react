import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer">
        <div className="bottombar">
            <div className="footer-trainers">
                <ul>Trenéři a rezervace lekcí:
                    <li>
                        <Link to="/denisaplackova">Denisa</Link>
                    </li>
                    <li>
                        <Link to="/tomasdobias">Tomáš</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-location">
                Trenéři se pohybují v Praze, Praze-východ a východní části Středočeského kraje. Můžete se podívat na naši <a href="dogmap.html">psí mapu.</a>
            </div>
            <div className="footer-contacts">
                <ul>Kontakty
                    <li>Denisa <a href="tel:+420736178325">+420 736 325</a></li>
                    <li>Tomáš <a href="tel:+420637908543">+420 637 908 543</a></li>
                </ul>
            </div>
        </div>
    </footer>
);

export default Footer