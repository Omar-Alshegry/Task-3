import { HiBars3BottomRight } from "react-icons/hi2"
import "./NavBar.css"
import { IoIosArrowRoundForward } from "react-icons/io"
import { useState } from "react"
import { NavLink } from "react-router-dom"

interface NavBarProps1 {
    content : string
    path : string
}
interface NavBarProps {
    logo : string
    items : Array<NavBarProps1>
}

const NavBar = ({logo , items} : NavBarProps) => {
    const [showMenu , setShowMenu] = useState<boolean>(false)
    return (
        <div className="containerHeader">
            <div className="topNav">
                <img src="/assets/img/topNav.png" alt="image" className="topNavImg"/>
                <div className="descNav">
                    <p>Admission is Open, Grab your seat now</p>
                    <IoIosArrowRoundForward />
                </div>
            </div>
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="navItems">
                    {
                        items.map((item , index) =>{
                            return(
                                <li key={index} className="item">
                                    <NavLink 
                                        className={({isActive}) => isActive ? "activeLinkNav" : ""} 
                                        to={item.path}
                                    >
                                        {item.content}
                                    </NavLink>
                                </li>
                                
                                // <li key={index} className="item">{item}</li>
                            )
                        })
                    }
                </ul>
                {/* {
                    showMenu ? 
                    <HiBars3BottomRight className="barsIcon" onClick={() => setShowMenu(!showMenu)}/>
                    :""
                } */}
                <div className="barseGroup">
                    <HiBars3BottomRight className="barsIcon" onClick={() => setShowMenu(!showMenu)}/>
                </div>
                
            </nav>
            <div className={` navMenu ${showMenu ? "show" : ""}`}>
                <ul>
                    {
                        items.map((item , index) =>{
                            return(
                                <li key={index} className="itemMenu">
                                    <NavLink 
                                        className={({isActive}) => isActive ? "activeLinkNav" : ""} 
                                        to={item.path}
                                    >
                                        {item.content}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default NavBar