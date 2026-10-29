import OurAwardsandRecognitionsSection from "../components/OurAwardsandRecognitionsSection/OurAwardsandRecognitionsSection"
import OurHistorySection from "../components/OurHistorySection/OurHistorySection"
import OurMissionVisionsSection from "../components/OurMissionVisionsSection/OurMissionVisionsSection"
import OurTeamMembersSection from "../components/OurTeamMembersSection/OurTeamMembersSection"
import PagesHero from "../components/PagesHero/PagesHero"

const AboutUs = () => {
    return (
        <>
            <PagesHero 
                btn = "Overview"
                title = "Welcome to Little Learners Academy"
                desc = "A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
            />
            <div className="container">
                <OurMissionVisionsSection />
                <OurAwardsandRecognitionsSection />
                <OurHistorySection />
                <OurTeamMembersSection />
            </div>
        </>
    )
}

export default AboutUs