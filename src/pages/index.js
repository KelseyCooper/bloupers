import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Party from "../images/drinks.svg"
import SEO from "../components/seo"
import PageTransition from 'gatsby-plugin-page-transitions';

const IndexPage = () => (
  <Layout>
    <PageTransition
      transitionTime={1000}
    >
      <div className="home-page">
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <img className="home-page__image" src={Party} />
        <h1 className="home-page__title">Come Celebrate with the Boopers</h1>
      </div>
    </PageTransition>
  </Layout>
)

export default IndexPage
