import CardOurHistory from "../CardOurHistory/CardOurHistory"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./OurHistorySection.css"

interface historysection {
    imgSrc : string
    year : string
    title : string
    desc : string
}

const OurHistorySection = () => {
    const historyItem : Array<historysection>= [
        {
            imgSrc : "/assets/img/imgcardHistory.png",
            year : "2023",
            title : "Resilience and Future Horizons",
            desc : "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
        },
        {
            imgSrc : "/assets/img/imgcardHistory.png",
            year : "2017",
            title : "Innovation and Technology",
            desc : "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
        },
        {
            imgSrc : "/assets/img/imgcardHistory.png",
            year : "2012",
            title : "Expansion and Recognition",
            desc : "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
        },
        {
            imgSrc : "/assets/img/imgcardHistory.png",
            year : "2005",
            title : "Inception and Growth",
            desc : "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
        },
    ]
    return (
        <section className="OurHistorySection">
            <TitleAndDescription 
                btn = "Our Progressive Journey"
                title="Our History"
                desc = "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
            />
            <div className="boxOurHistorySection">
                <div className="cicleLineContainerHistory">
                    <div className="lineHistorySection">
                        <div className="circleHitory"></div>
                        <div className="lineHistory"></div>
                        <div className="circleHitory"></div>
                    </div>
                    <div className="verticalLineHistory"></div>
                    <div className="lineHistorySection">
                        <div className="circleHitory"></div>
                        <div className="lineHistory"></div>
                        <div className="circleHitory"></div>
                    </div>
                    <div className="verticalLineHistory"></div>
                    <div className="lineHistorySection">
                        <div className="circleHitory"></div>
                        <div className="lineHistory"></div>
                        <div className="circleHitory"></div>
                    </div>
                    <div className="verticalLineHistory"></div>
                    <div className="lineHistorySection">
                        <div className="circleHitory"></div>
                        <div className="lineHistory"></div>
                        <div className="circleHitory"></div>
                    </div>
                </div>
                <div className="groupOurHistorySection">
                    {
                        historyItem?.map((item , index)  => {
                            return(
                                    <CardOurHistory 
                                        key={index}
                                        imgSrc={item.imgSrc}
                                        year={item.year}
                                        title={item.title}
                                        desc = {item.desc}
                                    />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurHistorySection