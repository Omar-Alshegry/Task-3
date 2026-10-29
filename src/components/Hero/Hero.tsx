import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <img src="/assets/img/heroImg.png" alt="hero" />
            <div className="containerHero">
                <h2 className="secondTitleHero">Welcome to Little Learners Academy</h2>
                <h1>Where Young Minds Blossom and <span>Dreams Take Flight. </span> </h1>
                <p className="descHero">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                <div className="boxHero">
                    <div className="infoHero">
                        <h2 className="infoTitle">+7000</h2>
                        <p className="descInfo">Students Passed Out</p>
                    </div>
                    <div className="infoHero">
                        <h2 className="infoTitle">+37</h2>
                        <p className="descInfo">Awards & Recognitions</p>
                    </div>
                    <div className="infoHero">
                        <h2 className="infoTitle">+15</h2>
                        <p className="descInfo">Experience Educators</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero