import "./CardMissionVision.css"

interface cardMissionVision {
    title : string
    imgsrc : string
    desc : string
}

const CardMissionVision = ({title , imgsrc , desc} : cardMissionVision) => {
    return (
        <div className="cardMissionVision">
            <div className="topMision">
                <div className="titlecardMissionVision">{title}</div>
                <img src={imgsrc} alt="icon" className="iconMisionCard" />
            </div>
            <div className="desccardMissionVision">{desc}</div>
        </div>
    )
}

export default CardMissionVision