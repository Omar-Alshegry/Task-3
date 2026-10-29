import CardWhatStudentsLearnSection from "../CardWhatStudentsLearnSection/CardWhatStudentsLearnSection"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./WhatStudentsLearnSection.css"

interface WhatStudentsLearnSection {
    imgSrc : string
    title : string
    desc : string
}

const WhatStudentsLearnSection = () => {
    const itemWhatStudentsLearnSection : Array<WhatStudentsLearnSection> = [
        {
            imgSrc : "/assets/img/imgWhat1.png",
            title : "Language Arts",
            desc : "Reading, writing, storytelling, and communication skills."
        },
        {
            imgSrc : "/assets/img/imgWhat2.png",
            title : "Mathematics",
            desc : "Number sense, basic operations, problem-solving, and logic."
        },
        {
            imgSrc : "/assets/img/imgWhat3.png",
            title : "Science",
            desc : "Exploring the natural world through hands-on experiments and investigations."
        },
        {
            imgSrc : "/assets/img/imgWhat4.png",
            title : "Social Studies",
            desc : "Cultivating an understanding of diverse cultures and communities."
        },
        {
            imgSrc : "/assets/img/imgWhat5.png",
            title : "Arts and Crafts",
            desc : "Encouraging creativity through various art forms and crafts."
        },
        {
            imgSrc : "/assets/img/imgWhat1.png",
            title : "Physical Education",
            desc : "Promoting physical fitness, coordination, and teamwork."
        },
    ]
    return (
        <div className="WhatStudentsLearnSection">
            <TitleAndDescription 
                btn = "Our Features"
                title="What Students Learn"
                desc = "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
            />
            <div className="containerWhatStudentsLearnSection">
                {
                    itemWhatStudentsLearnSection?.map((card,index) => {
                        return (
                            <CardWhatStudentsLearnSection 
                                key={index}
                                imgSrc = {card.imgSrc}
                                title= {card.title}
                                desc = {card.desc}
                            />
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default WhatStudentsLearnSection