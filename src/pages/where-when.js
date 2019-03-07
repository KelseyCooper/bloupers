import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from 'gatsby-plugin-page-transitions';

const WhereWhenPage = () => (
  <Layout>
    <PageTransition transitionTime={1000}>
      <SEO title="Where/when" />
      <h1>Where when</h1>
      <p>Welcome to page 2</p>
    </PageTransition>
  </Layout>
)

export default WhereWhenPage
