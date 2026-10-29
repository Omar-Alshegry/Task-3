import "./CardOurHistory.css"

interface history {
    imgSrc : string
    year : string
    title : string
    desc : string
}

const CardOurHistory = ({imgSrc , year , title , desc} : history ) => {
    return (
        <div className="CardOurHistory">
            <div className="boxCardOurHistory">
                <img src={imgSrc} alt="img" className="imgCardHistory"/>
                <p className="year">{year}</p>
            </div>
            <div className="groupCardOurHistory">
                <h2 className="titlehistory">{title}</h2>
                <p className="descHistory">{desc}</p>
            </div>
        </div>
    )
}

export default CardOurHistory