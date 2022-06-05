import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Contacts = () => (
  <>
    <section className="main--section__contacts">
      <h1 className="text--headline__contacts">Denisa Plačková</h1>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">IČO:</h2>
        <div className="contact">06335942</div>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">email:</h2>
        <div className="contact">dejna.p@centrum.cz</div>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">mobil:</h2>
        <div className="contact">+420 777 303 211</div>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">místo působnosti:</h2>
        <div className="contact">Praha a přilehlé okolí</div>
      </div>
    </section>

    <section className="main--section__contacts">
      <h1 className="text--headline__contacts">Tomáš Dobiáš</h1>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">IČO:</h2>
        <div className="contact">74106864</div>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">email:</h2>
        <div className="contact">dobiastomas@seznam.cz</div>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">mobil:</h2>
        <div className="contact">+420 736 177 353</div>
      </div>
      <div className="text--contacts">
        <h2 className="text--subheadline2__contacts">místo působnosti:</h2>
        <div className="contact">Kouřim a přilehlé okolí</div>
      </div>
    </section>
  </>
);

export default Contacts;
