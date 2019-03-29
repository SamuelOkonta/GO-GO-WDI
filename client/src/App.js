import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Anime from './components/Anime'
import Genre from './components/Genre'
import Home from './components/Home'
import SpecificGenre from './components/SpecificGenre'
 

class App extends Component {
 state = {
    stateTest: 'This from App' 
 }
  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/anime" component={Anime}/>
          <Route exact path="/genre" component={Genre}/>
          <Route path="/genre/:genreId" component={SpecificGenre} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
