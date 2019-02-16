import React, { Component } from 'react'
import Home from './Home';
import About from './About';
import Footer from './Footer';


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Home/>
        <About/>
        <Footer/>
      </div>
    )
  }
}
