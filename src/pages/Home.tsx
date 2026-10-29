import FAQSection from "../components/FAQSection/FAQSection"
import Header from "../components/Headre/Header"
import Hero from "../components/Hero/Hero"
import NavigateSection from "../components/NavigateSection/NavigateSection"
import OurBenefitsSection from "../components/OurBenefitsSection/OurBenefitsSection"
import OurTestimonials from "../components/OurTestimonials/OurTestimonials"

const Home = () => {
    return (
        <>
            <div className="container">
                <Header>
                    <Hero />
                </Header>
                <main>
                    <OurBenefitsSection />
                    <OurTestimonials />
                    <FAQSection />
                    <NavigateSection />
                </main>
            </div>
        </>
    )
}

export default Home