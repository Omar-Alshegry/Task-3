import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import CardOurBenefits from "../CardOurBenefits/CardOurBenefits"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./OurAwardsandRecognitionsSection.css"
import { useState } from "react"

interface propsOurAwardsandRecognitionsSection {
    img : string
    title : string
    desc : string
}

const OurAwardsandRecognitionsSection = () => {
    const [count ,setCount] = useState<number>(0)
    const moveLeft = () : void => {
        let newCount : number
        const cards : NodeListOf<Element>= document.querySelectorAll(".OurAwardsandRecognitionsSection .groupAllSliderAward .boxSliderAward .containerSliderAward .cardAward")
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
        const cards : NodeListOf<Element> = document.querySelectorAll(".OurAwardsandRecognitionsSection .groupAllSliderAward .boxSliderAward .containerSliderAward .cardAward")
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
        const cards : NodeListOf<Element> = document.querySelectorAll(".OurAwardsandRecognitionsSection .groupAllSliderAward .boxSliderAward .containerSliderAward .cardAward")
        if (!cards.length) return
        const card : HTMLElement = cards[0] as HTMLElement
        const gap : number = parseFloat(getComputedStyle(card.parentElement as HTMLElement).gap) || 0
        const step : number = card.offsetWidth + gap
        cards.forEach(card => {
            (card as HTMLElement).style.transform = `translateX(calc(${count} * -${step}px))`
        })
    }
    const cardAward : Array<propsOurAwardsandRecognitionsSection> = [
        {
            img : "/assets/img/IconAward1.png",
            title : "Outstanding Early Childhood Education Awar",
            desc : "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
        },
        {
            img : "/assets/img/IconAward2.png",
            title : "Innovative STEAM Education Award",
            desc : "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        },
        {
            img : "/assets/img/IconAward3.png",
            title : "Environmental Stewardship Award",
            desc : "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
        },
        {
            img : "/assets/img/IconAward1.png",
            title : "Outstanding Early Childhood Education Awar",
            desc : "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        },
        {
            img : "/assets/img/IconAward2.png",
            title : "Innovative STEAM Education Award",
            desc : "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
        }
    ]
    return (
        <section className="OurAwardsandRecognitionsSection">
            <TitleAndDescription 
                btn = "Our Achievements"
                title="Our Awards and Recognitions"
                desc = "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
            />
            <div className="groupAllSliderAward">
                <div className="boxSliderAward">
                    <div className="containerSliderAward">
                        {
                            cardAward?.map((card,index) => {
                                return (
                                    <CardOurBenefits 
                                        key={index}
                                        calssname= "cardAward"
                                        img = {card.img}
                                        title= {card.title}
                                        desc = {card.desc}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                
                <div className="bottomSliderAward">
                    <p className="countAwards">8 More Awards</p>
                    <div className="ArrowSliderAward">
                        <div className="boxLeftArrow" onClick={() => moveLeft()}>
                            <IoIosArrowRoundBack />
                        </div>
                        <div className="boxRightArrow" onClick={() => moveRight()}>
                            <IoIosArrowRoundForward />
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
}

export default OurAwardsandRecognitionsSection