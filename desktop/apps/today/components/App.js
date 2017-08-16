import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class App extends Component {
  render () {
    return (
      <div id="today-page" className="main-layout-container">
        <h2 className="today-page-header">Artsy Today</h2>
        {partnerShows}
      </div>
    )
  }
}
