import CardOurBenefits from "../CardOurBenefits/CardOurBenefits"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./OurBenefitsSection.css"


interface propsBenefits1 {
    img : string
    title : string
    desc : string
}

const OurBenefitsSection = () => {
    const cardBenefits : Array<propsBenefits1> = [
        {
            img : "/assets/img/gradute.png",
            title : "Holistic Learning Approach",
            desc : "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
        },
        {
            img : "/assets/img/crown.png",
            title : "Experienced Educators",
            desc : "Our passionate and qualified teachers create a supportive and stimulating learning environment."
        },
        {
            img : "/assets/img/Nurturing.png",
            title : "Nurturing Environment",
            desc : "We prioritize safety and provide a warm and caring atmosphere for every child."
        },
        {
            img : "/assets/img/flag.png",
            title : "Play-Based Learning",
            desc : "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        },
        {
            img : "/assets/img/attention.png",
            title : "Individualized Attention",
            desc : "Our small class sizes enable personalized attention, catering to each child's unique needs."
        },
        {
            img : "/assets/img/society.png",
            title : "Parent Involvement",
            desc : "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
        }
    ]
    return (
        <section className="OurBenefits">
            <TitleAndDescription 
                btn = "Children Deserve Bright Future"
                title="Our Benefits"
                desc = "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
            />
            <div className="containerBenefits">
                {
                cardBenefits?.map((card,index) => {
                    return (
                        <CardOurBenefits 
                            key={index}
                            img = {card.img}
                            title= {card.title}
                            desc = {card.desc}
                        />
                        )
                    })
                }
            </div>
            

        </section>
    )
}

export default OurBenefitsSection