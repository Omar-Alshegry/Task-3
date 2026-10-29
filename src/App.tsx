import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"

interface NavBarProps1 {
    content : string
    path : string
}

function App() {
  const navItems : Array<NavBarProps1>=[
        {
        content : "Home",
        path : "/"
        },
        {
        content : "About Us",
        path : "/AboutUs"
        },
        {
        content : "Academics",
        path : "/Academics"
        },
        {
        content : "Admissions",
        path : "/Admissions"
        },
        {
        content : "Student",
        path : "/Student"
        },
        {
        content : "Contact",
        path : "/Contact"
        },
    ]
  return (
    <>
      <NavBar 
        logo = "/assets/img/Logo.png"
        items = {navItems}
      />
      <Outlet />
      <Footer 
        img = "/assets/img/Logo.png"
        desc = "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
        footerItems = {["Home" , "Features" , "Our Testimonials" , "FAQ"]}
        footerItems1 = {["About Us" , "Our Mission" , "Our Vission" , "Awards and Recognitions" , "History" , "Teachers"]}
        footerItems2 = {["Academics" , "Special Features" , "Gallery"]}
        footerItems3 = {["Contact Us" , "Information" , "Map & Direction"]}
      />
    </>
  )
}

export default App
