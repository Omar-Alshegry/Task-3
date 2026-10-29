import CardOurBenefits from "../CardOurBenefits/CardOurBenefits"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./OurSpecialFeaturesSection.css"

interface OurSpecialFeaturesSection {
    img : string
    title : string
    desc : string
}

const OurSpecialFeaturesSection = () => {
    const cardOurSpecialFeaturesSection : Array<OurSpecialFeaturesSection> = [
        {
            img : "/assets/img/imgFeatures1.png",
            title : "Thematic Learning",
            desc : "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
        },
        {
            img : "/assets/img/imgFeatures2.png",
            title : "STEAM Education",
            desc : "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
        },
        {
            img : "/assets/img/imgFeatures3.png",
            title : "Language Immersion",
            desc : "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."
        },
        {
            img : "/assets/img/imgFeatures4.png",
            title : "Art and Creativity",
            desc : "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
        },
        {
            img : "/assets/img/imgFeatures5.png",
            title : "Outdoor Education",
            desc : "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
        },
        {
            img : "/assets/img/imgFeatures6.png",
            title : "Play-Based Learning",
            desc : "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
        }
    ]
    return (
        <section className="OurSpecialFeaturesSection">
            <TitleAndDescription 
                btn = "Our Features"
                title="Our Special Features"
                desc = "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            />
            <div className="containerFeatures">
                {
                    cardOurSpecialFeaturesSection?.map((card,index) => {
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

export default OurSpecialFeaturesSection