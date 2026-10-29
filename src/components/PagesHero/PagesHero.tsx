import "./PagesHero.css"

interface heroPages {
    btn : string
    title : string
    desc : string
}

const PagesHero = ({btn , title , desc} : heroPages) => {
    return (
        <div className='heroPages'>
            <div className="containerHeroPages">
                <img src="/assets/img/heroPagesImg.png" alt="hero" className="imgHeroPages"/>
                <div className="leftHeroPages">
                    <button className="btnHeroPages">{btn}</button>
                    <h1 className="titleHeroPages">{title}</h1>
                </div>
                <p className="rightHeroPages">{desc}</p>
            </div>
        </div>
    )
}

export default PagesHero