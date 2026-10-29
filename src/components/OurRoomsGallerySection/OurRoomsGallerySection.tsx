import { useState } from "react"
import CardOurRoomsGallerySection from "../CardOurRoomsGallerySection/CardOurRoomsGallerySection"
import TitleAndDescription from "../TitleAndDescription/TitleAndDescription"
import "./OurRoomsGallerySection.css"

interface OurRoomsGallerySection {
    imgSrc1 : string
    imgSrc2 : string
    imgSrc3 : string
    imgSrc4 : string
    title : string
    desc : string
}

const OurRoomsGallerySection = () => {
    const [show , setShow] = useState<string>("All")
    const cardOurRoomsGallerySection : Array<OurRoomsGallerySection> = [
        {
            imgSrc1 : "/assets/img/imgGallery1.png",
            imgSrc2 : "/assets/img/imgGallery2.png",
            imgSrc3 : "/assets/img/imgGallery3.png",
            imgSrc4 : "/assets/img/imgGallery4.png",
            title : "Classrooms",
            desc : "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
        },
        {
            imgSrc1 : "/assets/img/imgGallery5.png",
            imgSrc2 : "/assets/img/imgGallery6.png",
            imgSrc3 : "/assets/img/imgGallery7.png",
            imgSrc4 : "/assets/img/imgGallery8.png",
            title : "Library",
            desc : "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
        },
        {
            imgSrc1 : "/assets/img/imgGallery9.png",
            imgSrc2 : "/assets/img/imgGallery10.png",
            imgSrc3 : "/assets/img/imgGallery11.png",
            imgSrc4 : "/assets/img/imgGallery12.png",
            title : "Science Lab",
            desc : "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
        },
        {
            imgSrc1 : "/assets/img/imgGallery13.png",
            imgSrc2 : "/assets/img/imgGallery14.png",
            imgSrc3 : "/assets/img/imgGallery15.png",
            imgSrc4 : "/assets/img/imgGallery16.png",
            title : "Computer Lab",
            desc : "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
        },
        {
            imgSrc1 : "/assets/img/imgGallery17.png",
            imgSrc2 : "/assets/img/imgGallery18.png",
            imgSrc3 : "/assets/img/imgGallery19.png",
            imgSrc4 : "/assets/img/imgGallery20.png",
            title : "Garden and Nature Area",
            desc : "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
        },
    ]
    const classroom :Array<OurRoomsGallerySection>= [
        {
            imgSrc1 : "/assets/img/imgGallery1.png",
            imgSrc2 : "/assets/img/imgGallery2.png",
            imgSrc3 : "/assets/img/imgGallery3.png",
            imgSrc4 : "/assets/img/imgGallery4.png",
            title : "Classrooms",
            desc : "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
        }
    ]
    const Library :Array<OurRoomsGallerySection>= [
        {
            imgSrc1 : "/assets/img/imgGallery5.png",
            imgSrc2 : "/assets/img/imgGallery6.png",
            imgSrc3 : "/assets/img/imgGallery7.png",
            imgSrc4 : "/assets/img/imgGallery8.png",
            title : "Library",
            desc : "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
        }
    ]
    const ScienceLab :Array<OurRoomsGallerySection>= [
        {
            imgSrc1 : "/assets/img/imgGallery9.png",
            imgSrc2 : "/assets/img/imgGallery10.png",
            imgSrc3 : "/assets/img/imgGallery11.png",
            imgSrc4 : "/assets/img/imgGallery12.png",
            title : "Science Lab",
            desc : "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
        }
    ]
    const ComputerLab :Array<OurRoomsGallerySection>= [
        {
            imgSrc1 : "/assets/img/imgGallery13.png",
            imgSrc2 : "/assets/img/imgGallery14.png",
            imgSrc3 : "/assets/img/imgGallery15.png",
            imgSrc4 : "/assets/img/imgGallery16.png",
            title : "Computer Lab",
            desc : "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
        }
    ]
    const Garden :Array<OurRoomsGallerySection>= [
        {
            imgSrc1 : "/assets/img/imgGallery17.png",
            imgSrc2 : "/assets/img/imgGallery18.png",
            imgSrc3 : "/assets/img/imgGallery19.png",
            imgSrc4 : "/assets/img/imgGallery20.png",
            title : "Garden and Nature Area",
            desc : "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
        }
    ]
    return (
        <div className="OurRoomsGallerySection">
            <TitleAndDescription 
                btn = "Our Gallery"
                title="Our Rooms Gallery"
                desc = "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
            />
            <div className="containerGallery">
                <div className="boxBtnGallery">
                    <button className="btnGallery" onClick={() => setShow("All")}>All</button>
                    <button className="btnGallery" onClick={() => setShow("Classrooms")}>Classrooms</button>
                    <button className="btnGallery" onClick={() => setShow("Library")}>Library</button>
                    <button className="btnGallery" onClick={() => setShow("ScienceLap")}>Science Lab</button>
                    <button className="btnGallery" onClick={() => setShow("ComputerLab")}>Computer Lab</button>
                    <button className="btnGallery" onClick={() => setShow("Garden")}>Garden and Nature Area</button>
                </div>
                <div className="boxCardGallery">
                    {
                        show == "All" ? 
                        cardOurRoomsGallerySection?.map((card , index) => {
                            return (
                                <CardOurRoomsGallerySection 
                                    key={index}
                                    imgSrc1={card.imgSrc1}
                                    imgSrc2={card.imgSrc2}
                                    imgSrc3={card.imgSrc3}
                                    imgSrc4={card.imgSrc4}
                                    title={card.title}
                                    desc={card.desc}
                                />
                            )
                        })
                        :
                        show == "Classrooms" ? 
                        classroom?.map((card , index) => {
                            return (
                                <CardOurRoomsGallerySection 
                                    key={index}
                                    imgSrc1={card.imgSrc1}
                                    imgSrc2={card.imgSrc2}
                                    imgSrc3={card.imgSrc3}
                                    imgSrc4={card.imgSrc4}
                                    title={card.title}
                                    desc={card.desc}
                                />
                            )
                        })
                        :
                        show == "Library" ? 
                        Library?.map((card , index) => {
                            return (
                                <CardOurRoomsGallerySection 
                                    key={index}
                                    imgSrc1={card.imgSrc1}
                                    imgSrc2={card.imgSrc2}
                                    imgSrc3={card.imgSrc3}
                                    imgSrc4={card.imgSrc4}
                                    title={card.title}
                                    desc={card.desc}
                                />
                            )
                        })
                        :
                        show == "ScienceLap" ? 
                        ScienceLab?.map((card , index) => {
                            return (
                                <CardOurRoomsGallerySection 
                                    key={index}
                                    imgSrc1={card.imgSrc1}
                                    imgSrc2={card.imgSrc2}
                                    imgSrc3={card.imgSrc3}
                                    imgSrc4={card.imgSrc4}
                                    title={card.title}
                                    desc={card.desc}
                                />
                            )
                        })
                        :
                        show == "ComputerLab" ? 
                        ComputerLab?.map((card , index) => {
                            return (
                                <CardOurRoomsGallerySection 
                                    key={index}
                                    imgSrc1={card.imgSrc1}
                                    imgSrc2={card.imgSrc2}
                                    imgSrc3={card.imgSrc3}
                                    imgSrc4={card.imgSrc4}
                                    title={card.title}
                                    desc={card.desc}
                                />
                            )
                        })
                        :
                        show == "Garden" ? 
                        Garden?.map((card , index) => {
                            return (
                                <CardOurRoomsGallerySection 
                                    key={index}
                                    imgSrc1={card.imgSrc1}
                                    imgSrc2={card.imgSrc2}
                                    imgSrc3={card.imgSrc3}
                                    imgSrc4={card.imgSrc4}
                                    title={card.title}
                                    desc={card.desc}
                                />
                            )
                        })
                        :""
                    }
                </div>
            </div>
        </div>
    )
}

export default OurRoomsGallerySection