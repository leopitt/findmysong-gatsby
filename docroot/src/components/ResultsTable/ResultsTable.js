import React from "react"

import ResultsTableRow from "../ResultsTableRow/ResultsTableRow"

export default class ResultsTable extends React.Component {

  renderTableData () {
    return this.props.tracks.map((track, key) => {
       return (
          <ResultsTableRow key={key} title={track.title} artist={track.artist} spotify_id={track.spotify_id} />
       )
    })
  }

  render () {
    const tracks = this.props.tracks
    const hasBeenSearched = this.props.hasBeenSearched
    const isSearching = this.props.isSearching

    if (isSearching) {
      return <div className="c-results__throbber"/>
    }

    if (tracks && tracks.length > 0) {
      return <table className="c-results__table">
          <thead className="c-results__table__head">
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Spotify</th>
              <th>Deezer</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
    } else if (hasBeenSearched) {
      return <p className="c-results__no-results">Sorry, your name has inadequate cultural cache. Please get a different name.</p>
    } else {
      return null
    }
  }
}
