import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

const Tomas = () => (
    <section className="main-content">
        <div className="trainer-main">
            <div className="trainer-gallery">
                <div className="trainer-img trainer-img_1"></div>
                <div className="trainer-img trainer-img_2"></div>
                <div className="trainer-img trainer-img_3"></div>
            </div>
            <div className="trainer-text">
                <div className="trainer-head">
                    <h1 className="trainer-h1">Tomáš Dobiáš</h1>
                    <a href="trainers.html" class="trainer-btn">Rezervovat lekci</a>
                </div>
                <div className="trainer-info">
                    <h2 className="trainer-h2">Něco málo o mně</h2>
                    <p>Ahoj, jsem Tomáš a již 6. rokem pracuji v útulku Dogpoint jako ošetřovatel a výcvikář. Během této doby mi pod rukama prošlo několik stovek psů různých plemen i charakterů. Do výcviku se snažím zakomponovat různé metody, nejsem zastáncem toho, že tahle nebo tahle metoda je jediná správná a jiná zase vyloženě špatná. Přístup k výcviku je třeba volit individuálně, podle toho jak to daná situace vyžaduje. </p>
                    <div className="trainer-img-narrow trainer-img_1narrow"></div>
                    <p> Velmi rád pozoruji, jak správným přístupem se z <Link to="/duvera_pes" className="link-text">nejistého a bojácného psa stává milující a sebevědomý přítel člověka.</Link> Pomůžu vám pochopit, jak s takovýmto pejskem pracovat, jak nacvičovat manipulaci a jak posílit vaší i pejskovu sebejistotu. Stejně tak ale dokáži pracovat s přespříliš sebevědomými psy, kteří mohou někdy páníčkům přerůstat přes hlavu. Tady vám <Link to="/kontrola_pes" className="link-text">pomohu nastavit hranice a ukáži vám, jak převzít kontrolu </Link> nad vaším společným životem. </p>
                    <div className="trainer-img-narrow trainer-img_2narrow"></div>
                    <p>Pokud jste si v nedávné době pořídili štěně nebo puberťáka, rád Vás provedu výchovou, aby jste vedle sebe měli parťáka, na kterého se můžete spolehnout a váš pejsek ve vás viděl pána, kterému důvěřuje a může mu přenechat kontrolu.</p>
                </div>
                <div className="trainer-lessons">
                    <h2 className="trainer-h2">Lekce a ceník</h2>
                    <p>Mojí základnou je město Kouřim a pohybuji se v radiusu max do 30 km o víkendech, ve všední jsou možné lekce i v Praze. Nejraději ale lekce vedu na novém cvičáku v Kouřimi, který spadá pod útulek Dogpoint. Lekce je možné mít i mimo cvičák, vše záleží na domluvě.</p>
                    <p>V případě cvičení v Kouřimi a blízkého okolí (do 10 km) je cena hodinové lekce 500 Kč. V případě dojezdu nad 10 Km budou k hodinové sazbě připočteny náklady na dopravu ve výši 5 Kč/km (např. při dojezdu na okraj Prahy o víkendu je cena lekce 700 Kč/hod).</p>
                    <div className="trainer-img-narrow trainer-img_3narrow"></div>
                </div>
                <div className="trainer-reservation">
                    <h1 className="trainer-h1">Rezervace</h1>
                    <p>Nejdříve vyberte v kalendáři vámi preferovaný den a potom najdete v kalendáři volné dny s termíny (zeleně zbarvené). Zde si můžete zvolit vybraný termín lekce.</p>
                    <p>Rezervaci je možné provést nejdříve 30 dní předem a nejpozději den před termínem. Pokud je políčko šedivé, není možné rezervaci provést.</p>
                </div>
            </div>
        </div>
    </section>
)

export default Tomas