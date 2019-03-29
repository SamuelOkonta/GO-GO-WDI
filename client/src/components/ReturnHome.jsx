import React, { Component } from 'react'
import styled from 'styled-components'
import { Redirect, BrowserRouter} from 'react-router-dom'
const Button = styled.button`
    background-color: lightseagreen;
    color: #211;
    font-weight: bold;
    cursor: pointer;
    padding: 15px;
    font-size: 2em;
    margin: 4px;
    
`
 class ReturnHome extends Component {
    state = {
        redirect: false
    }
    redirect = () => {
        this.setState({redirect: true})
    }
  render() {
    if (this.state.redirect) {
        return (<Redirect to="/genre" />)
    }
    return (
        <BrowserRouter>
      <Button onClick={this.redirect}>

          Back
      </Button>
      </BrowserRouter>
    )
  }
}
export default ReturnHome