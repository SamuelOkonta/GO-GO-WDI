import React, { Component } from 'react'
import axios from 'axios'
import {Link, Redirect, BrowserRouter} from 'react-router-dom'
import ReturnHome from './ReturnHome'
 
class SpecificGenre extends Component {

    state = {
anime: [],
    }

    getSpecificGenre = () => {
        axios.get(`/api/v1/genre/${this.props.match.params.genreId}`).then(res => {
        this.setState({anime: res.data.anime})
})
    }

    componentDidMount() {
        this.getSpecificGenre();
    }

   

  render() {
    return (
      <div>
        {
            this.state.anime.map((anime) => {
                return(
                <div>
                <h1>{anime.name}</h1>
                <h3>{anime.language}</h3>
                <p>{anime.episodes}</p>
                <img src={`${anime.image}`} alt={anime.name}></img>
                </div>
                )
            })
        }
        <a href='/genre'>Back to Genre</a>
        {/* <ReturnHome /> */}
      </div>
    )
  }
}

export default SpecificGenre