import React from 'react';
import './trust.css';
import { Link } from 'react-router-dom';

const ArticleTrust = () => (
    <section className="main--section__trust">
        <div className="container--article__trust">
            <div className="article--gallery__trust">
                <div className="gallery--img trust--img__1"></div>
                <div className="gallery--img trust--img__2"></div>
                <div className="gallery--img trust--img__3"></div>
                <div>
                    <ul className='gallery--list__trust'>
                        <h1>Články</h1>
                        <li className='list--item__trust'>
                            <Link to="/vychova_pes" className='link--gallery__trust'>Výchova štěněte a následně puberťáka</Link>
                        </li>
                        <li className='list--item__trust'>
                            <Link to="/kontrola_pes" className='link--gallery__trust'>Mějte kontrolu nad svým psem</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="article--text__trust">
                <div className="text--head__trust">
                    <h1 className="text--headline__trust">Získejte si důvěru bázlivého pejska</h1>
                </div>
                <div className="text--main__trust">
                    <p>Zpravidla nejtěžší bývá získat si důvěru bázlivého psa. Strach z lidí může mít u psů různé příčiny. Ať už je to špatná zkušenost, nedostatečná socializace, nebo třeba vrozená nedůvěřivost, vždy máte před sebou těžký úkol – dát psovi najevo, že se Vás nemusí bát a že Vám může důvěřovat. V tomto případě je potřeba hlavně trpělivost a klid.  Hodně Vám může pomoci znalost konejšivých signálů, což jsou prvky psí komunikace, kterými psi dávají najevo, že pro druhého nejsou hrozbou. Psi těmto signálům do určité míry rozumí i pokud je používá člověk. </p>
                    <p className='text--highlight__trust'> Hodně Vám může pomoci znalost konejšivých signálů, což jsou prvky psí komunikace, kterými psi dávají najevo, že pro druhého nejsou hrozbou. Psi těmto signálům do určité míry rozumí i pokud je používá člověk.</p>
                    <div className="article--img trust--img__1narrow"></div>
                    <p> Strach se může projevovat různými způsoby. Některý pes může přejít k agresi, aby hrozbu eliminoval, jiný se zase bude snažit za každou cenu utéct nebo se schovat. Další se zase může projevovat apaticky, ztuhnout a bez jakékoli reakce se sebou nechat manipulovat. Tyto tři projevy mají i svůj odborný název, jsou to takzvané 3 F, fight (útok), flight (útěk) a freeze (zmzrnutí). Ke každému z těchto případů je potřeba přistupovat trochu jinak, u všech je zároveň potřeba postupovat opatrně a pomalu.  </p>
                    <p>V případě strachové agrese je třeba zhodnotit rizika a závažnost situace. V některých případech je vhodné využít takzvaného chráněného kontaktu (tj. kontakt přes mříže), případně použít vybavení, jako je náhubek nebo ochranné pomůcky (např. rukavice). </p>
                    <p className='text--highlight__trust'> V žádném případě nesmíme psovi agresi oplácet, vždy musíme zůstat klidní a vyrovnaní. Pokud se začneme bát, nebo jsme v přílišném stresu, je lepší trénink odložit na později. V tomto případě je použití konejšivých signálů obzvlášť důležité, psa musíme neustále utvrzovat v tom, že mu od nás nehrozí žádné nebezpečí, a tudíž není třeba uchylovat se k agresi. Využijeme také pamlsků a budeme okamžitě odměňovat jakékoli jiné než agresivní chování. </p>
                    <div className="article--img trust--img__2narrow"></div>
                    <p>Pokud se pes snaží utéct nebo schovat, je potřeba tomu zabránit (trénovat v uzavřeném prostoru nebo na delším vodítku, tak aby neměl možnost utéct, ale zároveň měl dostatek osobního prostoru). Také využíváme konejšivých signálů a snažíme se psa přimět ke klidu. Nemusíme se snažit o dotek, pro začátek stačí, když si navykne na naši přítomnost a uvolní se. Pak už se s ním bude pracovat o mnoho lépe.</p>
                    <div className="article--img trust--img__3narrow"></div>
                    <p>Pokud pes ztuhne a nehýbe se, přistupujeme k němu pomalu a opatrně. V tomto stavu se již konejšivé signály mohou minout účinkem, protože pes je ve stavu, kdy své okolí plně nevnímá. V tomto případě bych doporučil pomocí takzvané habituace (postupné navykání) navykat na kontakt a doteky. </p>
                    <p className='text--highlight__trust'>V krátkých intervalech s častým opakováním, vždy u toho být klidný a tichý, přistupovat ke psovi tak, aby na nás neustále viděl. Časem si na náš kontakt zvykne a sníží se tím úroveň jeho stresu, což povede k tomu, že nás začne více vnímat a snadněji s ním můžeme dále pracovat.</p>
                    <h3 className="text--subheadline3__trust">Pro nezkušeného majitele může být bázlivý nebo nejistý pes opravdový oříšek, a proto nás neváhejte kontaktovat, rádi Vám s ním pomůžeme.</h3>
                </div>
                <div>
                    <ul className='text--list__trust'>
                        <h1>Články</h1>
                        <li className='list--item__trust'> 
                            <Link to="/vychova_pes" className='link--text__trust'>Výchova štěněte a následně puberťáka</Link>
                        </li>
                        <li className='list--item__trust'>
                            <Link to="/kontrola_pes" className='link--text__trust'>Mějte kontrolu nad svým psem</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default ArticleTrust