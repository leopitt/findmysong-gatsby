import PropTypes from "prop-types"
import React from "react"

const ResultsTableRow = ({ title, artist, spotify_id, deezer }) => (
  <tr className="c-results-table__row">
    <td className="c-results-table__row__field">{title}</td>
    <td className="c-results-table__row__field">{artist}</td>
    <td className="c-results-table__row__field"><a href={"https://open.spotify.com/embed/track/" + spotify_id} target="_blank" rel="noopener noreferrer" className="c-results-table__row__spotify" title={"Play \"" + title + "\" on Spotify"}>Spotify</a></td>
    <td className="c-results-table__row__field c-results-table__row__field--hidden">Deezer</td>
  </tr>
)

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

export default ResultsTableRow
