import "./CardOurBenefits.css"

interface propsBenefits {
    img : string
    title : string
    desc : string
    calssname? : string
}

const CardOurBenefits = ({title , desc ,img , calssname} : propsBenefits) => {
    return (
        <div className= {`cardOurBenefits ${calssname}`}>
            <div className="boxCardBenefits">
                <img src={img} alt="icon" className="iconBenefits" />
            </div>
            <h2 className="titleCardBenefits">{title}</h2>
            <p className="descBenefits">{desc}</p>
        </div>
    )
}

export default CardOurBenefits