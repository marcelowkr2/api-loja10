import React from "react"
import AboutUsGrid from "../../components/AboutUsGrid"
import AboutUsProcess from "../../components/AboutUsProcess"
import BannerCatalogo from "../../components/BannerCatalogo"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MeetKelly from "../../components/MeetKelly"

function About() {
  return (
    <div>
      <Header />
      <BannerCatalogo title='Sobre Nós' frase={<React.Fragment>Conheça um pouco da&nbsp;<span className="font-bold">nossa história</span>!</React.Fragment>} />
      <MeetKelly />
      <AboutUsGrid />
      <AboutUsProcess />
      <Footer />
    </div>
  )
}

export default About