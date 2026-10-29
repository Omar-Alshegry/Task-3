import CardOurTeamMembers from "../CardOurTeamMembers/CardOurTeamMembers"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./OurTeamMembersSection.css"

interface CardOurTeamMembersSection {
    imgsrc : string
    name : string
    iconSrc : string
    title : string
    desc : string
}

const OurTeamMembersSection = () => {
    const OurTeamMembersSection : Array<CardOurTeamMembersSection> = [
        {
            imgsrc : "assets/img/OurTeamMember1.png",
            name : "Ms. Sarah Anderson",
            iconSrc : "/assets/img/mail.png",
            title : "Qualification:Bachelor's Degree in Early Childhood Education",
            desc : "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
        },
        {
            imgsrc : "assets/img/OurTeamMember2.png",
            name : "Mr. David Roberts",
            iconSrc : "/assets/img/mail.png",
            title : "Qualification: Master's Degree in Elementary Education",
            desc : "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
        },
        {
            imgsrc : "assets/img/OurTeamMember3.png",
            name : "Ms. Emily Hernandez",
            iconSrc : "/assets/img/mail.png",
            title : "Qualification: Diploma in Child Psychology",
            desc : "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
        },
        {
            imgsrc : "assets/img/OurTeamMember4.png",
            name : "Mr. Michael Turner",
            iconSrc : "/assets/img/mail.png",
            title : "Qualification: Bachelor's Degree in Physical Education",
            desc : "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
        },
        {
            imgsrc : "assets/img/OurTeamMember5.png",
            name : "Ms. Jessica Lee",
            iconSrc : "/assets/img/mail.png",
            title : "Qualification: Master's Degree in Special Education",
            desc : "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
        },
        {
            imgsrc : "assets/img/OurTeamMember6.png",
            name : "Mr. William Parker",
            iconSrc : "/assets/img/mail.png",
            title : "Qualification: Bachelor's Degree in Fine Arts",
            desc : "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
        },
    ]
    return (
        <div className="OurTeamMembersSection">
            <TitleAndDescription 
                btn = "Our Teachers With Experties"
                title="Our Team Members"
                desc = "At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
            />
            <div className="containerOurTeamMembersSection">
                {
                    OurTeamMembersSection?.map((item , index) => {
                        return(
                            <CardOurTeamMembers 
                                key={index}
                                imgsrc={item.imgsrc}
                                name={item.name}
                                iconSrc={item.iconSrc}
                                title={item.title}
                                desc={item.desc}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OurTeamMembersSection