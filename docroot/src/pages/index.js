import React from "react"

import Intro from "../components/Intro/Intro"
import Layout from "../components/Layout/Layout"
import NameForm from "../components/NameForm/NameForm"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <NameForm />
  </Layout>
)

export default IndexPage
