import PropTypes from 'prop-types'
import * as React from 'react'

export default class App extends React.Component {
  static propTypes = {
    partnerShows: PropTypes.object
  }

  // I don't know how to get this
  // showImage = get(show, 'images.0.image_url', '/images/missing_image.png')

  render () {
    const showImage = '/images/missing_image.png'
    const partnerShowsList = this.props.partnerShows.map((show) =>

        <li>
          <img src={showImage} /><br />
          <strong>{show.partner.name}</strong><br />
         {show.name}<br />
         {show.start_at} - {show.end_at}<br />
         <hr />
        </li>
  )
    return (
      <div id='today-page' className='main-layout-container'>
        <h2 className='today-page-header'>Artsy Today (New York)</h2>
        <ul>{partnerShowsList}</ul>
      </div>
    )
  }
}
