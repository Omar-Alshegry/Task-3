import "./CardWhatStudentsLearnSection.css"

interface CardWhatStudentsLearnSection {
    imgSrc : string
    title : string
    desc : string
}

const CardWhatStudentsLearnSection = ({imgSrc , title , desc} : CardWhatStudentsLearnSection) => {
    return (
        <div className="CardWhatStudentsLearnSection">
            <div className="bglineCardWhat"></div>
            <img src={imgSrc} alt="img" className="imgCardWhat" />
            <h2 className="titleCardWhat">{title}</h2>
            <p className="descCardWhat">{desc}</p>
        </div>
    )
}

export default CardWhatStudentsLearnSection