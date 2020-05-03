import PropTypes from "prop-types"
import React from "react"

const ResultsTableRow = ({ title, artist, spotify, deezer }) => (
  <tr className="c-results-table__row">
    <td className="c-results-table__row__field">{title}</td>
    <td className="c-results-table__row__field">{artist}</td>
    <td className="c-results-table__row__field c-results-table__row__field--hidden">Spotify</td>
    <td className="c-results-table__row__field c-results-table__row__field--hidden">Deezer</td>
  </tr>
)

ResultsTableRow.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  deezer: PropTypes.string,
  spotify: PropTypes.string,
}

ResultsTableRow.defaultProps = {
  siteTitle: ``,
  artist: ``,
  deezer: ``,
  spotify: ``,
}

export default ResultsTableRow
