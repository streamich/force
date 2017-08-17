import PropTypes from 'prop-types'
import * as React from 'react'

export default class App extends React.Component {
  static propTypes = {
    partnerShows: PropTypes.object
  }

  render () {
    const partnerShowsList = this.props.partnerShows.map((show) =>
    <li>{show.name}</li>
  )
    return (
      <div id='today-page' className='main-layout-container'>
        <h2 className='today-page-header'>Artsy Today</h2>
        <ul>{partnerShowsList}</ul>
      </div>
    )
  }
}
