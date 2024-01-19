import React from "react"
import About from "./About.jsx"
import Footer from "./Footer.jsx"
import Info from "./Info.jsx"
import Interests from "./Interests.jsx"

export default function App() {
    return (
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}