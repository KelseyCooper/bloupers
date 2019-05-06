import React from "react"

import Party from "../images/drinks.svg"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="page">
    <SEO title="Home" />
    <img className="home-page__image" src={Party} alt="party"/>
    <h1 className="home-page__title">Come Celebrate with the Boopers</h1>
  </div>
)

export default IndexPage
