import React from 'react';
import './control.css';
import { Link } from 'react-router-dom';


const ArticleControl = () => (
    <section className="main--section__control">
        <div className="container--article__control">
            <div className="article--gallery__control">
                <div className="gallery--img control--img__1"></div>
                <div className="gallery--img control--img__2"></div>
                <div className="gallery--img control--img__3"></div>
                <div>
                    <ul className='gallery--list__control'>
                        <h1>Články</h1>
                        <li className='list--item__control'>
                            <Link to="/vychova_pes" className='link--gallery__control'>Výchova štěněte a následně puberťáka</Link>
                        </li>
                        <li className='list--item__control'>
                            <Link to="/duvera_pes" className='link--gallery__control'>Získejte si důvěru</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="article--text__control">
                <div className="text--head__control">
                    <h1 className="text--headline__control">Mějte kontrolu nad svým psem</h1>
                </div>
                <div className="text--main__control">
                    <p>Pokud máte sebevědomého a vyrovnaného psa, je všechno v pořádku. Pokud je Váš pes sebevědomý až příliš a máte pocit, že se nad Vámi snaží získat převahu, je potřeba to řešit. V drtivé většině případů není nutné ani vhodné uchylovat se k fyzické konfrontaci. </p>
                    <p className='text--highlight__control'> Nad svým psem musíte mít převahu hlavně psychicky. Pes z Vás musí cítit sebevědomí, vyrovnanost a rozhodnost. Musíte si v každé situaci vědět rady a mít ji pod kontrolou. Pokud z Vás toto bude pes cítit, bude Vás následovat.</p>
                    <div className="article--img control--img__1narrow"></div>
                    <p> To se samozřejmě lépe říká, než dělá. Je potřeba si v hlavě srovnat, co vlastně po psovi chci. Nastavit mu určité hranice, naučit ho, jak se má v jaké situaci chovat a co se od něj očekává. Nenechávat ho řešit situace po svém. Pokud Váš pes na Vaše povely nereaguje, je klidně možné, že vůbec neví, co znamenají. </p>
                    <p className='text--highlight__control'> Měli byste si být jisti, že to, co po psovi chcete, chápe a umí. Často může být chyba jen v nedostatečném nebo špatném výcviku. Samotný výcvik také posiluje vzájemnou důvěru a náklonost, proto doporučuji nezanedbávat ho. </p>
                    <div className="article--img control--img__2narrow"></div>
                    <p>Důležité je znát i charakteristiky plemene. Některá plemena s Vámi budou nadšeně spolupracovat a ráda se podvolí Vašemu vedení, jiná můžou zase být více samostatná a svéhlavá. Lišit se samozřejmě může i charakter u každého jedince, žádní dva psi nejsou úplně stejní. Dále také musíme zohlednit životní fázi zvířete. Pokud máme doma psího puberťáka, musíme počítat s tím, že jeho poslušnost nebude zrovna stoprocentní a že bude mít větší tendenci dělat si věci po svém. V těchto případech pravděpodobně budeme muset mít trochu pochopení, ale rozhodně to není důvod polevovat v důslednosti!</p>
                    <div className="article--img control--img__3narrow"></div>
                    <p>Nezvladatelný pes může každopádně znamenat velký problém. Proto není dobré situaci podceňovat a v případě potřeby raději vyhledat odborníka dříve, než Vám Váš pes přeroste přes hlavu.</p>
                    <h3 className="text--subheadline3__control">Pokud máte tedy doma zrovna takový dáreček, neváhejte se na nás obrátit, rádi Vám s výcvikem pomůžeme nebo alespoň poradíme.</h3>
                </div>
                <div>
                    <ul className='text--list__control'>
                        <h1>Články</h1>
                        <li className='list--item__control'>
                            <Link to="/vychova_pes" className='link--text__control'>Výchova štěněte a následně puberťáka</Link>
                        </li>
                        <li className='list--item__control'>
                            <Link to="/duvera_pes" className='link--text__control'>Získejte si důvěru</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default ArticleControl