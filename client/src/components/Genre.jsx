import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ReturnHome from './ReturnHome'


 class Genre extends Component {
   state = {
    genresList: [], 
    newGenre: {
      genreName: '',
    anime : []
    },
   }

   getAllGenres = () => {
     axios
      .get('/api/v1/genre')
      .then(res => {
         this.setState({ 
           genresList: res.data
         })
      })
   }
    componentDidMount = () => {
      this.getAllGenres()
    }
    
    createGenre = (e) => {
      e.preventDefault()
      axios.post('/api/v1/genre', { genre: this.state.genre }).then(res => {
        this.setState({ redirectToHome: true, createdGenre: res.data })
      })
    }
    handleNewGenreChange = (event) => {
      const attributeName = event.target.name;
      const attributeValue = event.target.value;
      const newGenre = { ...this.state.newGenre };
      newGenre[attributeName] = attributeValue;
      this.setState({ newGenre })
}

addNewGenre = (evt) => {
  evt.preventDefault();
  // this.props.addNewGenreToGenreList(this.state.newGenre)
  axios
      .post('/api/v1/genre', {
          genre: this.state.newGenre,
    
        }).then((res) =>{
          this.getAllGenres()
          // this.props.handleCreateGenreForm()
      }) }

      render() {
const genresList = this.state.genresList.map((genre, i )=> {
  return(
  <div key={i}>
    <a href={`/genre/${genre._id}`} key={i}> {genre.genreName} </a>
    </div>
)})
return(

<div>
<form onSubmit={this.addNewGenre}>
    <div>
        <input
            type='text'
            name="genreName"
            placeholder="Genre Name"
            value={this.state.newGenre.genreName}
            onChange={this.handleNewGenreChange}
        />
    </div>
    
    <div>
        <input
            type="submit"
            value="Create New Genre"
        />
    </div>

    <div>
      {genresList}
      <ReturnHome/>
     </div>
</form>
</div>
)}}

      
      

  


export default Genre
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
