import React, { Component } from 'react'

export default class App extends Component {
  render (partnerShows) {
    const partnerShowsList = partnerShows.map((show) =>
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
