import "./CardOurTeamMembers.css"

interface CardOurTeamMembers {
    imgsrc : string
    name : string
    iconSrc : string
    title : string
    desc : string
}

const CardOurTeamMembers = ({imgsrc , name ,iconSrc , title , desc} : CardOurTeamMembers) => {
    return (
        <div className="CardOurTeamMembers">
            <div className="topCArdOurTeamMember">
                <div className="leftTopOurTeamMember">
                    <div className="boxImgMember">
                        <img src={imgsrc} alt="img" className="imgOurTeamMember" />
                    </div>
                    <p className="usernameCardOurTeamMember">{name}</p>
                </div>
                <div className="rightTopOurTeamMember">
                    <img src={iconSrc} alt="icon" className="iconCardMember" />
                </div>
            </div>
            <div className="bottomCArdOurTeamMember">
                <h2 className="titlemember">{title}</h2>
                <p className="descMember">{desc}</p>
            </div>
        </div>
    )
}

export default CardOurTeamMembers