import CardFAQ from "../CardFAQ/CardFAQ"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./FAQSection.css"

interface propsFAQ1 {
    question : string
    answer : string
}

const FAQSection = () => {
    const cardFAQ : Array<propsFAQ1> = [
        {
            question : "What are the school hours at Little Learners Academy?",
            answer : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
        },
        
        {
            question : "Is there a uniform policy for students?",
            answer : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
        },
        
        {
            question : "IWhat extracurricular activities are available for students?",
            answer : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
        },
        
        {
            question : "What extracurricular activities are available for students?",
            answer : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
        }
    ]
    const cardFAQ1 : Array<propsFAQ1> = [
        {
            question : "How do you handle food allergies and dietary restrictions?",
            answer : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
        },
        {
            question : "What is the teacher-to-student ratio at Little Learners Academy?",
            answer : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
        },
        {
            question : "How do you handle discipline and behavior management?",
            answer : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
        },
        {
            question : "How do I apply for admission to Little Learners Academy?",
            answer : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
        }
    ]
    return (
        <section className="FAQ">
            <TitleAndDescription 
                btn = "Solutions For The Doubts"
                title="Frequently Asked Questions"
                desc = "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
            />
            <div className="containerFAQ">
                <div className="sec1">
                    {
                        cardFAQ?.map((card,index) => {
                            return (
                                <CardFAQ
                                    key={index}
                                    question = {card.question}
                                    answer= {card.answer}
                                />
                            )
                        })
                    }
                </div>
                
                <div className="sec2">
                    {
                        cardFAQ1?.map((card,index) => {
                            return (
                                <CardFAQ
                                    key={index}
                                    question = {card.question}
                                    answer= {card.answer}
                                />
                            )
                        })
                    }
                </div>
                
            </div>
            
        </section>
    )
}

export default FAQSection