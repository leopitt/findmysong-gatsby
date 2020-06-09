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
      <li><a href="https://www.gatsbyjs.org/" target="_blank">Gatsby</a></li>
      <li><a href="https://www.musixmatch.com/" target="_blank">Musixmatch lyric API</a></li>
      <li><a href="https://www.drupal.org/" target="_blank">Drupal 8</a></li>
      <li><a href="https://github.com/margueriteroth/gatsby-prismic-starter-prist" target="_blank">Prismic Gatsby theme</a></li>
    </ul>
    <h2 className="page__h2">Source code ...</h2>
    <ul>
      <li><a href="https://github.com/leopitt/findmysong-gatsby" target="_blank">Gatsby front-end</a></li>
      <li><a href="https://github.com/leopitt/findmysong" target="_blank">Drupal 8 back-end</a></li>
    </ul>
    <h2 className="page__h2">Find me on ...</h2>
    <ul>
      <li><a href="https://github.com/leopitt" target="_blank">Github</a></li>
      <li><a href="https://www.drupal.org/u/leo-pitt" target="_blank">Drupal</a></li>
      <li><a href="https://www.drupal.org/u/leo-pitt" target="_blank">Twitter</a></li>
      <li><a href="https://www.linkedin.com/in/leo-pitt/" target="_blank">LinkedIn</a></li>
    </ul>
  </Layout>
)

export default AboutPage
