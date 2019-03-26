import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Anime extends Component {
  state = {
      anime: [],
      newAnime: {
          name: '',
          description: ''
      },
      isAnimeFormDisplayed: false
  }

  componentDidMount = () => {
    axios.get('/api/v1').then(res => {
        this.setState({anime: res.data})
    })
  }

  toggleAnimeForm = () => {
      this.setState((state, props) => {
          return ({isAnimeFormDisplayed: !state.isAnimeFormDisplayed})
      })
  }

  handleChange = (e) => {
    const cloneNewAnime = {...this.state.newAnime}
    cloneNewAnime[e.target.name] = e.target.value
    this.setState({newAnime: cloneNewAnime})
  }

  createAnime = (e) => {
    e.preventDefault()
    axios
        .post('/api/v1', {
            name: this.state.newAnime.name,
            description: this.state.newAnime.description
        })
        .then(res => {
            const AnimeList = [...this.state.Anime]
            AnimeList.unshift(res.data)
            this.setState({
                newAnime: {
                    name: '',
                    description: ''
                },
                isAnimeFormDisplayed: false,
                Anime: AnimeList
            })
        })

  }

  render() {
    return (
      <div>
        <h1>Anime</h1>
        {
            this.state.Anime.map(Anime => {
                return (
                    <div key={Anime._id}>
                        <Link
                            to={`/${Anime._id}`}
                        >
                            {Anime.name}
                        </Link>
                    </div>
                )
            })
        }
        <button onClick={this.toggleAnimeForm}>+ New Anime</button>
        {
            this.state.isAnimeFormDisplayed
                ? <form onSubmit={this.createAnime}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newAnime.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            type="text"
                            name="description"
                            onChange={this.handleChange}
                            value={this.state.newAnime.description}
                        />
                    </div>
                    <button>Create</button>
                </form>
                : null
        }
      </div>
    )
  }
}

export default Anime