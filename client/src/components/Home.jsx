import React, { Component } from 'react'
import {Link, BrowserRouter}from 'react-router-dom'

 class Home extends Component {
  render() {
    return (
      <div>
        Home Component
        <BrowserRouter>
        <a href='/genre'>Genre</a>
        </BrowserRouter>
      </div>
    )
  }
}

export default Home