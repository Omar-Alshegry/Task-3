import CardMissionVision from "../CardMissionVision/CardMissionVision"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./OurMissionVisionsSection.css"

const OurMissionVisionsSection = () => {
    return (
        <section className="OurMissionVisionsSection">
            <TitleAndDescription 
                btn = "Mission & Visions"
                title="Our Mission & Visions"
                desc = "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
            />
            <div className="containerMision">
                <CardMissionVision 
                    title = "Mission"
                    imgsrc = "/assets/img/imgMissionVision1.png"
                    desc = "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey."
                />
                <CardMissionVision 
                    title = "vision"
                    imgsrc = "/assets/img/imgMissionVision2.png"
                    desc = "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity."
                />
            </div>
            
        </section>
    )
}

export default OurMissionVisionsSection