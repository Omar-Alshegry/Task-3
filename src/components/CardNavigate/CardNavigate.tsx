import { IoIosArrowRoundForward } from "react-icons/io"
import "./CardNavigate.css"


interface propsNavigate1 {
    desc : string
    title : string
    btn : string
}

const CardNavigate = ({title , desc , btn} : propsNavigate1) => {
    return (
        <div className="cardNavigate">
            <h1 className="titleCardNavigate">{title}</h1>
            <div className="groupLineNavigate">
                <div className="circleCardNavigate"></div>
                <div className="boxLineCardNavigate">
                    <div className="lineNavigate"></div>
                    <div className="lineNavigate"></div>
                    <div className="lineNavigate"></div>
                    <div className="lineNavigate"></div>
                    <div className="lineNavigate"></div>
                </div>
                <div className="circleCardNavigate"></div>
            </div>
            <p className="descNavigate">{desc}</p>
            <button className="btnCardNavigate">{btn} <IoIosArrowRoundForward /></button>
        </div>
    )
}

export default CardNavigate