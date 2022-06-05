import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Tomas = () => (
    <section className="main--section__tomas">
        <div className="container--trainer__tomas">
            <div className="trainer--gallery__tomas">
                <div className="gallery--img tomas--img__1"></div>
                <div className="gallery--img tomas--img__2"></div>
                <div className="gallery--img tomas--img__3"></div>
            </div>
            <div className="trainer--text__tomas">
                <div className="text--head__tomas">
                    <h1 className="text--headline__tomas">Tomáš Dobiáš</h1>
                    <a href="#reservation__tomas" className="text--btn__tomas">Rezervovat lekci</a>
                </div>
                <div className="text--main__tomas">
                    <h2 className="text--subheadline2__tomas">Něco málo o mně</h2>
                    <p>Ahoj, jsem Tomáš a již šestým rokem pracuji v útulku Dogpoint jako ošetřovatel a výcvikář. Během této doby mi pod rukama prošlo několik stovek psů různých plemen i charakterů. Do výcviku se snažím zakomponovat různé metody, nejsem zastáncem názoru, že tahle nebo tahle metoda je jediná správná, a jiná zase vyloženě špatná. Přístup k výcviku je třeba volit individuálně, podle toho jak to daná situace vyžaduje. </p>
                    <div className="text--img tomas--img__1narrow"></div>
                    <p> Velmi rád pozoruji, jak se správným přístupem se z <Link to="/duvera_pes" className="text--link__tomas">nejistého a bojácného psa stává milující a sebevědomý přítel člověka.</Link> Pomůžu vám pochopit, jak s takovýmto pejskem pracovat, jak nacvičovat manipulaci a jak posílit vaši i pejskovu sebejistotu. Stejně tak ale dokážu pracovat s přespříliš sebevědomými psy, kteří mohou někdy páníčkům přerůstat přes hlavu. Tady vám <Link to="/kontrola_pes" className="text--link__tomas">pomohu nastavit hranice a ukážu vám, jak převzít kontrolu </Link> nad vaším společným životem. </p>
                    <div className="text--img tomas--img__2narrow"></div>
                    <p>Pokud jste si v nedávné době pořídili štěně nebo puberťáka, <Link to="/vychova" className="text--link__tomas">rád Vás provedu výchovou,</Link> aby jste vedle sebe měli parťáka, na kterého se můžete spolehnout, a váš pejsek ve vás viděl pána, kterému důvěřuje a může mu přenechat kontrolu.</p>
                </div>
                <div className="text--lessons__tomas">
                    <h2 className="text--subheadline2__tomas">Lekce a ceník</h2>
                    <p>Mojí základnou je město Kouřim a jsem ochotný dojet za klienty do vzdálenosti 30 km. Nejraději však lekce vedu na novém cvičáku v Kouřimi, který spadá pod útulek Dogpoint. Lekce je možné mít i mimo cvičák, vše záleží na domluvě.</p>
                    <p>Cena hodinové lekce je 500 Kč.</p>
                    <div className="text--img tomas--img__3narrow"></div>
                </div>
            </div>
        </div>
        <div className="text--reservation__tomas">
                    <h1 className="text--headline__tomas" id='reservation__tomas'>Rezervace</h1>
                    <p>Nejdříve vyberte v kalendáři vámi preferovaný den a potom pod kalendářem najdete volné dny s termíny (zeleně zbarvené). Zde si můžete zvolit vybraný termín lekce.</p>
                    <p>Rezervaci je možné provést nejdříve 30 dní předem a nejpozději 2 dny před termínem. Pokud je políčko šedivé, není možné rezervaci provést. Pokud chcete cvičit v Dog parku, zaškrtněte políčko při vytváření rezervace. Pokud nechcete, napište, prosím, do poznámky, kde bude lekce probíhat. </p>
                </div>
        <div className="reenio-iframe" data-size="auto" data-url="/employee/tomas-dobias-7358/2022-06-06;viewMode=7-days"></div>
    </section>
    
)

export default Tomas