import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import "./CardOurRoomsGallerySection.css"
import { useRef, useState } from "react"

interface CardOurRoomsGallerySectionProps {
    title: string
    desc: string
    imgSrc1: string
    imgSrc2: string
    imgSrc3: string
    imgSrc4: string
}

const CardOurRoomsGallerySection = ({ title, desc, imgSrc1, imgSrc2, imgSrc3, imgSrc4 }: CardOurRoomsGallerySectionProps) => {
    const [count, setCount] = useState<number>(0)
    const groupImgRef = useRef<HTMLDivElement>(null)
    const getCards = (): NodeListOf<HTMLElement> | null => {
        if (!groupImgRef.current) return null
        return groupImgRef.current.querySelectorAll(".imgCardGallery")
    }

    const move = (newCount: number): void => {
        const cards = getCards()
        if (!cards || !cards.length) return
        const card = cards[0] as HTMLElement
        const gap = parseFloat(getComputedStyle(card.parentElement as HTMLElement).gap) || 0
        const step = card.offsetWidth + gap
        cards.forEach(c => {
            c.style.transform = `translateX(${newCount * -step}px)`
        })
    }

    const moveLeft = (): void => {
        const cards = getCards()
        if (!cards) return
        const total = cards.length
        const newCount = count === total - 1 ? 0 : count + 1
        setCount(newCount)
        move(newCount)
    }

    const moveRight = (): void => {
        const cards = getCards()
        if (!cards) return
        const total = cards.length
        const newCount = count === 0 ? total - 1 : count - 1
        setCount(newCount)
        move(newCount)
    }

    return (
        <div className="CardOurRoomsGallerySection">
            <div className="groupImgGallery" ref={groupImgRef}>
                <img src={imgSrc1} alt="img" className="imgCardGallery" />
                <img src={imgSrc2} alt="img" className="imgCardGallery" />
                <img src={imgSrc3} alt="img" className="imgCardGallery" />
                <img src={imgSrc4} alt="img" className="imgCardGallery" />
                <img src={imgSrc1} alt="img" className="imgCardGallery" />
                <img src={imgSrc2} alt="img" className="imgCardGallery" />
            </div>
            <div className="boxTitleArrowsCardGallery">
                <h2 className="titleCardGallery">{title}</h2>
                <div className="ArrowSliderGallery">
                    <div className="boxLeftArrowGallery" onClick={moveLeft}>
                        <IoIosArrowRoundBack />
                    </div>
                    <div className="boxRightArrowGallery" onClick={moveRight}>
                        <IoIosArrowRoundForward />
                    </div>
                </div>
            </div>
            <p className="descCardGallery">{desc}</p>
        </div>
    )
}

export default CardOurRoomsGallerySection