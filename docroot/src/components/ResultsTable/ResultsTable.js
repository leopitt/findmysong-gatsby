import React from "react"

export default class ResultsTable extends React.Component {
  render () {
    const tracks = this.props.tracks
    if (tracks && tracks.length > 0) {
      console.log(tracks)
      return <table className="c-results-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Spotify</th>
              <th>Deezer</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
    } else {
      return null
    }
  }
}
