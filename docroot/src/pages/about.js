import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" description="About Find My Song." />
    <h1 className="page__h1">About</h1>
    <p>Developed as a Gatsby &amp; React learning exercise by <a href="https://github.com/leopitt">Leo Pitt</a>.</p>
    <h2 className="page__h2">Built with ...</h2>
    <ul>
      <li><a href="https://github.com/margueriteroth/gatsby-prismic-starter-prist">Prismic Gatsby theme</a></li>
      <li><a href="https://www.drupal.org/">Drupal 8</a></li>
      <li><a href="https://www.gatsbyjs.org/">Gatsby</a></li>
      <li><a href="https://www.musixmatch.com/">Musixmatch lyric API</a></li>
    </ul>
    <h2 className="page__h2">Source code ...</h2>
    <ul>
      <li><a href="https://github.com/leopitt/findmysong">Drupal 8 back-end</a></li>
      <li><a href="https://github.com/leopitt/findmysong-gatsby">Gatsby front-end</a></li>
    </ul>
    <h2 className="page__h2">Find me on ...</h2>
    <ul>
      <li><a href="https://github.com/leopitt">Github</a></li>
      <li><a href="https://www.drupal.org/u/leo-pitt">Drupal</a></li>
      <li><a href="https://www.drupal.org/u/leo-pitt">Twitter</a></li>
      <li><a href="https://www.linkedin.com/in/leo-pitt/">LinkedIn</a></li>
    </ul>
  </Layout>
)

export default AboutPage
