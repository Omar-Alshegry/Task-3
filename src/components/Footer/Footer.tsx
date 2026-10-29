import "./Footer.css"
import { BsFillTelephoneFill } from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

interface footer{
    img : string
    desc : string
    footerItems : Array<string>
    footerItems1 : Array<string>
    footerItems2 : Array<string>
    footerItems3 : Array<string>
}

const Footer = ({img , desc , footerItems , footerItems1 , footerItems2 , footerItems3} : footer) => {
    return (
        <div className="containerFooter">
            <footer className="footer">
                <div className="linksFooterContainer">
                    <div className="leftFooter">
                        <img src={img} alt="img" className="imgFooter" />
                        <p className="descFooter">{desc}</p>
                        <div className="contactFooter">
                            <div className="contact">
                                <div className="boxIconFooter"><MdEmail /></div>
                                <p className="descIconFooter">hello@littlelearners.com</p>
                            </div>
                            <div className="contact">
                                <div className="boxIconFooter"><BsFillTelephoneFill /></div>
                                <p className="descIconFooter">+91 91813 23 2309</p>
                            </div>
                            <div className="contact">
                                <div className="boxIconFooter"><FaLocationDot /></div>
                                <p className="descIconFooter">Somewhere in the World</p>
                            </div>
                        </div>
                    </div>
                    <div className="boxLinksFooter">
                        <ul className="ulFooter">
                            {
                                footerItems?.map((item , index) => {
                                    return(
                                        <li key={index} className={index ==0 ? "boldLi" : ""}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="ulFooter">
                            {
                                footerItems1?.map((item , index) => {
                                    return(
                                        <li key={index} className={index ==0 ? "boldLi" : ""}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="ulFooter">
                            {
                                footerItems2?.map((item , index) => {
                                    return(
                                        <li key={index} className={index ==0 ? "boldLi" : ""}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="ulFooter">
                            {
                                footerItems3?.map((item , index) => {
                                    return(
                                        <li key={index} className={index ==0 ? "boldLi" : ""}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="lineFooter"></div>
                <div className="termsFooter">
                    <div className="leftTermsFooter">
                        <p className="wordTermsFooter">Terms of Service</p>
                        {/* <div className="virticalLineTermsFooter"></div> */}
                        <p className="wordTermsFooter word2">Privacy Policy</p>
                        {/* <div className="virticalLineTermsFooter"></div> */}
                        <p className="wordTermsFooter">Cookie Policy</p>
                    </div>
                    <div className="rightTermsFooter">
                        <div className="boxIconSocialMediaFooter"><FaFacebook /></div>
                        <div className="boxIconSocialMediaFooter"><FaTwitter /></div>
                        <div className="boxIconSocialMediaFooter"><FaLinkedin /></div>
                    </div>
                </div>
                <div className="lineFooter"></div>
                <p className="copyRight">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
            </footer>
        </div>
        
    )
}

export default Footer