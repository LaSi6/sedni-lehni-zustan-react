import React from 'react';
import './education.css';
import { Link } from 'react-router-dom';


const ArticleEducation = () => (
    <section className="main--section__education">
    <div className="container--article__education">
        <div className="article--gallery__education">
            <div className="gallery--img education--img__1"></div>
            <div className="gallery--img education--img__2"></div>
            <div className="gallery--img education--img__3"></div>
            <div>
                <ul className='gallery--list__education'>
                    <h1>Články</h1>
                    <li className='list--item__education'>
                        <Link to="/kontrola_pes" className='link--gallery__education'>Mějte kontrolu nad svým psem</Link>
                    </li>
                    <li className='list--item__education'>
                        <Link to="/duvera_pes" className='link--gallery__education'>Získejte si důvěru</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="article--text__education">
            <div className="text--head__education">
                <h1 className="text--headline__education">Výchova štěněte a následně puberťáka</h1>
            </div>
            <div className="text--main__education">
                <h2 className="text--subheadline2__education">Aneb jaké si to vychováte, takové to máte...</h2>
                <div className="article--img education--img__1narrow"></div>
                <p>Při výchově štěněte je potřeba myslet na to, že co bude umět a jak se bude chovat, záleží především na Vás. Štěněti je potřeba zprostředkovat pozitivní asociaci se situacemi, místy, lidmi, dalšími zvířaty a vším, s čím bude ve svém životě přicházet do kontaktu. Předejdete tak nežádoucím reakcím v dospělosti. </p>
                <p> Je důležité vysvětlit mu a naučit ho, jak se v konkrétních situacích chovat, co od něj očekáváte a v jakém rozpoložení by ideálně mělo být. Když tedy v lese náhodou vyhrabe vosí hnízdo, a vy v tu chvíli začnete křičet a utíkat, pes pochopí, že tato situace je nebezpečná, a pravděpodobně se dá také na útěk. </p>
                <p className='text--highlight__education'> Čili je dobré si uvědomit, že Vaše rozpoložení a reakce na situaci má přímý vliv na rozpoložení a reakci Vašeho psa. Měli byste mu jít tedy vždy příkladem. </p>
                <p> Také byste ho měli naučit, jak se má chovat v dané situaci. Například ho můžete naučit, že před každou silnicí na Vás musí počkat a přejít ji s Vámi u nohy. Pes si tyto situace zautomatizuje a po čase ho už ani nenapadne to udělat jinak. Vždy je ale potřeba naprostá důslednost a konstantnost.
                </p>
                <div className="article--img education--img__2narrow"></div>
                <h2 className="text--subheadline2__education">Kdy začít s výchovou a výcvikem?</h2>
                <p> S výchovou byste měli začít ideálně hned, když si štěně přivezete domů. Malé štěně je jako nepopsaný list. Myslete na to, že co do něj vložíte, to se Vám také vrátí. U psů, stejně jako u ostatních živočichů platí jedno hlavní pravidlo.</p> 
                <p className='text--highlight__education'> Chování, které vede k úspěchu, má tendenci se opakovat a chování, které vede k neúspěchu, má tendenci vyhasínat. </p>
                <p>To znamená, že byste měli za každé žádoucí chování okamžitě odměňovat, a naopak nežádoucímu chování se snažit zamezit, případně ho alespoň korigovat nebo modifikovat.</p>
                <p>Co se týče trestů, určitě mají ve výchově a výcviku své místo, ale ne vždy je jejich použití vhodné a žádoucí. Také není úplně jednoduché zvolit správný způsob, intenzitu a načasování trestu, proto bych doporučil se jim spíše vyhnout. Avšak v určitých případech se i trest může hodit, jen je třeba uvědomit si, že trestem není míněn pouze fyzický trest. </p>
                <p className='text--highlight__education'> Pro psa může být trestem ztráta Vaší pozornosti, odebrání hračky, zamezení činnosti, která ho baví a další. Stejně tak odměna může mít různé podoby. Někteří psi mají radši jídlo, jiní zase hračky a některým může klidně jako odměna stačit Vaše pohlazení nebo pochvala. </p> 
                <p>V této fázi byste měli štěně naučit hygienické návyky, vysvětlit mu, co může a co ne, naučit jej reagovat na Váš hlas, případně nějaké základní povely, jako sedni, lehni a podobně.</p>
                <div className="article--img education--img__3narrow"></div>
                <p>S výcvikem jako takovým bych doporučil začít zhruba kolem čtvrtého měsíce (tento věk však není podmínkou, je to hodně individuální), kdy už štěně umí nějaké ty základy, reaguje na Váš hlas a chápe že určité chování vede k určitému výsledku. Myslete na to, že štěně neudrží pozornost příliš dlouho, a proto je potřeba cvičit tak, aby ho to bavilo. </p>
                <p className='text--highlight__education'> Ideální je cvičení hrou, kdy si se psem hrajeme a prokládáme to povely. Cvičení by mělo být ideálně spíše kratší a častější, snažíme se psa zbytečně nepřetěžovat a hlavně nenudit.</p>
                <p>V pubertě musíme počítat s tím, že pes bude mít tendenci vzdorovat a pravděpodobně ho začnou zajímat i další věci, než jídlo a hračky. Kvalita výcviku může poklesnout, a často je to pro majitele náročné období. Chce to trpělivost a pevné nervy. Určitě nepolevujte v důslednosti, ta je v tomto období hodně důležitá. </p>
                <h3 className="text--subheadline3__education">Kdybyste si přeci jen nevěděli rady, neváhejte se na nás obrátit, rádi Vám s výcvikem pomůžeme nebo alespoň poradíme.</h3>
            </div>
            <div>
                <ul className='text--list__education'>
                    <h1>Články</h1>
                    <li className='list--item__education'>
                        <Link to="/kontrola_pes" className='link--text__education'>Mějte psa pod kontrolou</Link>
                    </li>
                    <li className='list--item__education'>
                        <Link to="/duvera_pes" className='link--text__education'>Získejte si důvěru</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    
</section>
)

export default ArticleEducation