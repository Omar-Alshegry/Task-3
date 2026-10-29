import "./TitleAndDescription.css"

interface propsTitle{
    btn : string
    title : string
    desc : string
}

const TitleAndDescription = ({btn , title , desc} : propsTitle) => {
    return (
        <div className="containerTitleDesc">
            <button className="btnTitleAndDesc">{btn}</button>
            <h1 className="titleSection">{title}</h1>
            <p className="descSection">{desc}</p>
        </div>
    )
}

export default TitleAndDescription