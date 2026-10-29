import { useState } from "react"
import "./CardFAQ.css"


interface propsFAQ {
    question : string
    answer : string
}

const CardFAQ = ({question , answer} : propsFAQ) => {
    const [show , setShow] = useState<boolean>(false)
    return (
        <div className={`cardFAQ ${show ? "bg-white" : ""}`}>
            <div className="boxFAQCard">
                <h2 className="question">{question}</h2>
                <div className={`lineFAQ  ${show ? "" : "d-none"}`}></div>
                <p className={`answer ${show ? "" : "d-none"}`}>{answer}</p>
            </div>
            <button className="boxIconCArdFAQ" onClick={() => setShow(!show)}>
                {
                    show ? "-" : "+" 
                }
            </button>
        </div>
    )
}

export default CardFAQ