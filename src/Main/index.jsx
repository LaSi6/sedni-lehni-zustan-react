import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Main = () => (
    <div className='main'>
    <section className="top-section">
        <div className="main-introduction">
            <div className="introduction-wide">
                <h1 className="headline-main">Aby byl váš společný život jednodušší</h1> 
                <div className="introduction-narrow">
                    <p className="introduction-text">Pes je odrazem svého pána a je důležité najít společnou řeč. Pokud si ještě nejste jistí, že se Vám to podařilo, naši zkušení trenéři Vám v tom rádi pomohou. Na naší mapě naleznete ověřená místa, která se každému pejskaři mohou hodit.</p>
                    <div className="img-narrow-screen"></div>
                </div>
            </div>
            <div className="img-wide-screen"></div>     
        </div>  
    </section>
    <section className="main-experience">
        <h1 className="headline-experience">Máme zkušenosti s...</h1>
        <div className="tiles-experience">
        <Link to="/vychova" className="tile">
            <div className="tile-img tile-img_first"></div>
            <div className="tile-text tile-text_first">... mladými a nevycválanými dacany.</div>
            <div className="tile-link tile-link_first">Výchova puberťáka </div>
        </ Link>
        <Link to="/kontrola_pes" className="tile">
            <div className="tile-img tile-img_second"></div>
            <div className="tile-text tile-text_second">... sebevědomými a chytrými svéhlavci.</div>
            <div className="tile-link tile-link_second">Mějte kontrolu</div>
        </ Link>
        <Link to="/duvera_pes" className="tile">
            <div className="tile-img tile-img_third"></div>
            <div className="tile-text tile-text_third">... bázlivými dušemi s pohnutým osudem.</div>
            <div className="tile-link tile-link_third">Získejte důvěru</div>
        </Link>
        <div className="bottom-text-experience">Při výcviku volíme postup individuálně. Pokud se pro nás rozhodnete, rádi se s Vámi podíváme Vašemu pejskovi na zoubek.</div>
        </div>
        <div>
            <h1 className='headline-reservation'>Rezervace lekcí</h1>
            <div className="reenio-iframe" data-size="auto"></div>
        </div>
    </section>
    </div>
)

export default Main