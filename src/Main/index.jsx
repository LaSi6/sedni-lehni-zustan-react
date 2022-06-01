import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Main = () => (
    <>
    <section className="top-section">
        <div className="main-introduction">
            <div className="introduction-wide">
                <h1 className="headline-main">Aby byl váš společný život jednodušší</h1> 
                <div className="introduction-narrow">
                    <p className="introduction-text">Pes je odrazem svého pána a je důležité najít společnou řeč. Pokud si ještě nejste jistí, že se Vám to podařilo, naši zkušení trenéři Vám v tom rádi pomohou. Na naší mapě potom naleznete ověřená místa, která se každému pejskaři mohou hodit.</p>
                    <div className="img-narrow-screen"></div>
                </div>
            </div>
            <div className="img-wide-screen"></div>     
        </div>  
    </section>
    <section className="main-experience">
        <h1 className="headline-experience">Máme zkušenosti s...</h1>
        <div className="tiles-experience">
        <div className="tile">
            <div className="tile-img tile-img_first"></div>
            <div className="tile-text tile-text_first">... mladými a nevycválanými dacany.</div>
            <Link to="/vychova" className="tile-link tile-link_first">Výchova puberťáka</ Link>
        </div>
        <div className="tile">
            <div className="tile-img tile-img_second"></div>
            <div className="tile-text tile-text_second">... sebevědomými a chytrými svéhlavci.</div>
            <Link to="/kontrola_pes" className="tile-link tile-link_second">Mějte kontrolu</ Link>
        </div>
        <div className="tile">
            <div className="tile-img tile-img_third"></div>
            <div className="tile-text tile-text_third">... bázlivými dušemi s pohnutým osudem.</div>
            <Link to="/duvera_pes" className="tile-link tile-link_third">Získejte si důvěru</ Link>
        </div>
        <div className="bottom-text-experience">Při výcviku volíme postup individuálně. Pokud se pro nás tedy rozhodnete, rádi se s Vámi podíváme Vašemu pejskovi na zoubek.</div>
        </div>
    </section>
    </>
)

export default Main