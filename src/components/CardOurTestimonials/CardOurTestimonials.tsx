import { FaStar } from "react-icons/fa"
import "./CardOurTestimonials.css"

interface propsTestimonials {
    img : string
    title : string
    desc : string
}

const CardOurTestimonials = ({title , desc ,img} : propsTestimonials) => {
    return (
        <div className="CardOurTestimonials">
            <div className="circleCardTestimonials">
                <img src={img} alt="icon" className="imgTestimonials" />
            </div>
            <h2 className="titleCardTestimonials">{title}</h2>
            <div className="groupEvaluateCard">
                <FaStar  className="star"/>
                <FaStar  className="star"/>
                <FaStar  className="star"/>
                <FaStar  className="star"/>
                <FaStar  className="star"/>
            </div>
            <p className="descTestimonials">{desc}</p>
        </div>
    )
}

export default CardOurTestimonials