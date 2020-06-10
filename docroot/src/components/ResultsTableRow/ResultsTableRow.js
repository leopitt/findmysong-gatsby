import PropTypes from "prop-types"
import React from "react"

export default class ResultsTableRow extends React.Component {
  renderSpotifyIcon = ({ title, artist, spotify_id }) => {
    if (spotify_id) {
      return (
        <a href={"https://open.spotify.com/embed/track/" + spotify_id} target="_blank" rel="noopener noreferrer" className="c-results-table__row__spotify" title={"Play \"" + title + "\" on Spotify"}>Spotify</a>
      );
    } else {
      return null;
    }
  }

  render() {
    const title = this.props.title
    const artist = this.props.artist
    const spotify_id = this.props.spotify_id

    return <tr className="c-results-table__row">
        <td className="c-results-table__row__field">{title}</td>
        <td className="c-results-table__row__field">{artist}</td>
        <td className="c-results-table__row__field">{this.renderSpotifyIcon({ title, artist, spotify_id })}</td>
        <td className="c-results-table__row__field c-results-table__row__field--hidden">Deezer</td>
      </tr>
  }
}

ResultsTableRow.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  deezer: PropTypes.string,
  spotify_id: PropTypes.string,
}

ResultsTableRow.defaultProps = {
  siteTitle: ``,
  artist: ``,
  deezer: ``,
  spotify_id: ``,
}
