import React from "react"

import Intro from "../components/Intro/Intro"
import Layout from "../components/Layout/Layout"
import NameForm from "../components/NameForm/NameForm"
import SEO from "../components/seo"
import ResultsTable from "../components/ResultsTable/ResultsTable"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleResultsChange = this.handleResultsChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      tracks: [],
      hasBeenSearched: false,
      isSearching: false,
    }
  }

  handleResultsChange(data) {
    let items =  Object.values(data);
    let tracks = [];

    for (let key in items) {
      let item = items[key];
      tracks.push({
        title: item.track.track_name,
        artist: item.track.artist_name,
        spotify_id: item.track.spotify_id,
      });
    }

    this.setState({
      tracks: tracks,
      hasBeenSearched: true,
      isSearching: false,
    });
  }

  handleSearch() {
    this.setState({
      isSearching: true,
    });
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" description="Use this site to find songs with your name in the lyrics." />
        <Intro />
        <NameForm onResultsChange={this.handleResultsChange} onSearch={this.handleSearch} />
        <ResultsTable tracks={this.state.tracks} hasBeenSearched={this.state.hasBeenSearched} isSearching={this.state.isSearching} />
      </Layout>
    )
  }
}
