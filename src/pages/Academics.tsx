import OurRoomsGallerySection from "../components/OurRoomsGallerySection/OurRoomsGallerySection"
import OurSpecialFeaturesSection from "../components/OurSpecialFeaturesSection/OurSpecialFeaturesSection"
import PagesHero from "../components/PagesHero/PagesHero"
import WhatStudentsLearnSection from "../components/WhatStudentsLearnSection/WhatStudentsLearnSection"

const Academics = () => {
    return (
        <>
            <PagesHero 
                btn = "Academics"
                title = "Nurturing Young Minds for Success"
                desc = "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
            />
            <div className="container">
                <OurSpecialFeaturesSection />
                <WhatStudentsLearnSection />
                <OurRoomsGallerySection />
            </div>
        </>
    )
}

export default Academics