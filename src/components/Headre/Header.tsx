import type { ReactNode } from "react"
import "./Header.css"

const Header = ({children} : {children : ReactNode}) => {
    return (
        <header>
            {children}
        </header>
    )
}

export default Header