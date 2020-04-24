import React from "react"

import Layout from "../components/layout"
import NameForm from "../components/name-form"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Use this site to find songs with your name in the lyrics.</h1>
    <h2>What's your name?</h2>
    <NameForm />
  </Layout>
)

export default IndexPage
