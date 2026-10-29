import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import CardOurTestimonials from "../CardOurTestimonials/CardOurTestimonials"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./OurTestimonials.css"
import { useState } from "react"

interface propsTestimonials1 {
    img : string
    title : string
    desc : string
}

const OurTestimonials = () => {
    const [count ,setCount] = useState<number>(0)
    const moveLeft = () : void => {
        let newCount : number
        const cards : NodeListOf<Element>= document.querySelectorAll(".OurTestimonials .groupAllSlider .boxSlider .containerTestimonials .CardOurTestimonials")
        if (count == cards.length-1) {
            newCount = 0
            setCount(newCount)
        }else {
            newCount = count +1
            setCount(newCount)
        }
        console.log(newCount)
        move(newCount)
    }
    const moveRight = () : void => {
        let newCount : number
        const cards : NodeListOf<Element> = document.querySelectorAll(".OurTestimonials .groupAllSlider .boxSlider .containerTestimonials .CardOurTestimonials")
        if (count !=0){
            newCount = count -1
            setCount(newCount)
        }
        else{
            newCount = cards.length-1
            setCount(newCount)
        }
        console.log(newCount)
        move(newCount)
    }
    const move =(count : number) : void => {
        const cards : NodeListOf<Element> = document.querySelectorAll(".OurTestimonials .groupAllSlider .boxSlider .containerTestimonials .CardOurTestimonials")
        if (!cards.length) return
        const card : HTMLElement = cards[0] as HTMLElement
        const gap : number = parseFloat(getComputedStyle(card.parentElement as HTMLElement).gap) || 0
        const step : number = card.offsetWidth + gap
        cards.forEach(card => {
            (card as HTMLElement).style.transform = `translateX(calc(${count} * -${step}px))`
        })
    }
    const cardTestimonials : Array<propsTestimonials1> = [
        {
            img : "/assets/img/person1.png",
            title : "Jennifer B",
            desc : "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
        },
        {
            img : "/assets/img/person2.png",
            title : "David K",
            desc : "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
        },
        {
            img : "/assets/img/person3.png",
            title : "Emily L",
            desc : "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
        },
        {
            img : "/assets/img/person1.png",
            title : "Jennifer B",
            desc : "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
        },
        {
            img : "/assets/img/person2.png",
            title : "David K",
            desc : "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
        }
    ]
    return (
        <section className="OurTestimonials">
            <TitleAndDescription 
                btn = "Their Happy Words"
                title="Our Testimonials"
                desc = "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
            />
            <div className="groupAllSlider">
                <div className="boxLeftArrow" onClick={() => moveLeft()}>
                    <IoIosArrowRoundBack />
                </div>
                <div className="boxSlider">
                    <div className="containerTestimonials">
                        {
                        cardTestimonials?.map((card,index) => {
                            return (
                                <CardOurTestimonials 
                                    key={index}
                                    img = {card.img}
                                    title= {card.title}
                                    desc = {card.desc}
                                />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="boxRightArrow" onClick={() => moveRight()}>
                    <IoIosArrowRoundForward />
                </div>
            </div>
            
        </section>
    )
}

export default OurTestimonials