import React from "react"

import ResultsTableRow from "../ResultsTableRow/ResultsTableRow"

export default class ResultsTable extends React.Component {

  renderTableData () {
    return this.props.tracks.map((track, key) => {
       return (
          <ResultsTableRow key={key} title={track.title} artist={track.artist} />
       )
    })
  }

  render () {
    const tracks = this.props.tracks
    if (tracks && tracks.length > 0) {
      return <table className="c-results-table">
          <thead className="c-results-table__head">
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
    } else {
      return null
    }
  }
}
