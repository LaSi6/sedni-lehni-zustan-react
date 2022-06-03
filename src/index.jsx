import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Map from './Map';
import Tomas from './Tomas';
import Denisa from './Denisa';
import Contacts from './Contacts';
import ArticleControl from './ArticleControl';
import ArticleEducation from './ArticleEducation';
import ArticleTrust from './ArticleTrust';

const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} className="test"/>
        <Route path="mapa" element={<Map />} />
        <Route path="tomasdobias" element={<Tomas />} />
        <Route path="denisaplackova" element={<Denisa />} />
        <Route path="kontakty" element={<Contacts />} />
        <Route path="vychova" element={<ArticleEducation />} />
        <Route path="kontrola_pes" element={<ArticleControl />} />
        <Route path="duvera_pes" element={<ArticleTrust />} /> 
      </Routes>
      <Footer />
    </ BrowserRouter>
  </>
);

createRoot(
  document.querySelector('#app')
).render(<App />);
