import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Denisa = () => (
  <section className="main--section__denisa">
    <div className="container--trainer__denisa">
      <div className="trainer--gallery__denisa">
        <div className="gallery--img denisa--img__1"></div>
        <div className="gallery--img denisa--img__2"></div>
        <div className="gallery--img denisa--img__3"></div>
      </div>
      <div className="trainer--text__denisa">
        <div className="text--head__denisa">
          <h1 className="text--headline__denisa">Denisa Plačková</h1>
          <a href="#reservation__denisa" className="text--btn__denisa">
            Rezervovat lekci
          </a>
        </div>
        <div className="text--main__denisa">
          <h2 className="text--subheadline2__denisa">Něco málo o mně</h2>
          <p>
            Ahoj, jsem Denisa a psi mě provází od dětství. Vše začalo svéhlavým
            jack russell teriérem, který mne naučil, že mít psa znamená mraky
            důslednosti, bystrosti a umění být vždy o krok napřed. Postupně mi
            do života přibyla další různorodá plemena - cane corso, chrt. Se
            všemi jsem cvičila poslušnost, klikr, trénovala vodní a pozemní
            záchranařinu a velmi dbala na socializaci.{' '}
          </p>
          <div className="text--img denisa--img__1narrow"></div>
          <p>
            {' '}
            Několik let jsem pracovala ve výcvikovém centru Haf bez Obav, kde
            jsem měla na starosti hlavně štěňata a adolescenty. Mám{' '}
            <Link to="/kontrola_pes" className="text--link__tomas">
              zkušenost i s problémovými jedinci a vždy se snažím od začátku do
              řešení problémů aktivně zapojit i majitele psa
            </Link>{' '}
            - to je jediná cesta, která končí společným spokojeným soužitím
            onoho psího-lidského páru.
            <Link to="/duvera_pes" className="text--link__tomas">
              Budování důvěry musí být oboustranné.
            </Link>{' '}
            Neváhejte se na mne{' '}
            <Link to="/vychova" className="text--link__tomas">
              obrátit hned, jak si přinesete nového člena rodiny.
            </Link>
          </p>
          <div className="text--img denisa--img__2narrow"></div>
        </div>
        <div className="text--lessons__denisa">
          <h2 className="text--subheadline2__denisa">Lekce a ceník</h2>
          <p>
            Lekce vedu především v Praze. Lze se ovšem domluvit také na přilehlé
            okolí.
          </p>
          <p>
            Hodinová sazba je 500 Kč, v případě větší dojezdové vzdálenosti -
            vzdálená část Prahy/okraj, se připočítává 5 Kc/km.
          </p>
          <div className="text--img denisa--img__3narrow"></div>
        </div>
      </div>
    </div>
    <div id="reservation__denisa"></div>
    <div className="text--reservation__denisa">
      <h1 className="text--headline__denisa">Rezervace</h1>
      <p>
        Nejdříve vyberte v kalendáři vámi preferovaný den a potom najdete v
        kalendáři volné dny s termíny (zeleně zbarvené). Zde si můžete zvolit
        vybraný termín lekce.
      </p>
      <p>
        Rezervaci je možné provést nejdříve 30 dní předem a nejpozději 2 dny
        před termínem. Pokud je políčko šedivé, není možné rezervaci provést.
      </p>
    </div>
    <div
      className="reenio-iframe"
      data-size="auto"
      data-url="/employee/denisa-plackova-7361/2022-06-06;viewMode=7-days"
    ></div>
  </section>
);

export default Denisa;
