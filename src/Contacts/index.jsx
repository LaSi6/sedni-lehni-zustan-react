import React from 'react';
import './style.css';

const Contacts = () => (
  <div className="main--contacts">
    <section className="main--section__contacts">
    <div className='img--contacts img--contacts__denisa'></div>
    <div className="main--text__contacts">
      <h1 className="text--headline__contacts">Denisa Plačková</h1>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">IČO:</h2>
        <div className="contact">06335942</div>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">email:</h2>
        <a href="mailto:dejna.p@centrum.cz"className="contact contact-link">dejna.p@centrum.cz</a>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">mobil:</h2>
        <a href="tel:+420777303211" className="contact contact-link">+420 777 303 211</a>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">působnost:</h2>
        <div className="contact">Praha a přilehlé okolí</div>
      </div>
    </div>
    </section>

    <section className="main--section__contacts">
    <div className='img--contacts img--contacts__tomas'></div>
    <div className="main--text__contacts">
      <h1 className="text--headline__contacts">Tomáš Dobiáš</h1>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">IČO:</h2>
        <div className="contact">74106864</div>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">email:</h2>
        <a href="mailto:dobiastomas@seznam.cz"className="contact contact-link">dobiastomas@seznam.cz</a>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">mobil:</h2>
        <a href="tel:+420736177353"className="contact contact-link">+420 736 177 353</a>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">působnost:</h2>
        <div className="contact">Kouřim a přilehlé okolí</div>
      </div>
    </div>
    </section>
  </div>
);

export default Contacts;
