import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from 'gatsby-plugin-page-transitions';

const rsvpPage = () => (
  <Layout>
    <PageTransition>
      <SEO title="Where/when" />
      <h1>rsvp</h1>
      <p>Welcome to page 2</p>
    </PageTransition>
  </Layout>
)

export default rsvpPage
