import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import DetailedSeries from './DetailedSeries/DetailedSeries';
import Cast from './Cast/Cast';
import WatchOnline from './WatchOnline/WatchOnline';
import Movies from './Movies/Movies';
import Movie from './Movies/Movie';


class App extends Component {

  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/details' component={DetailedSeries}/>
      <Route path='/cast' component={Cast}/>
      <Route path='/watch' component={WatchOnline}/>
      <Route path='/movies' component={Movies}/>
      <Route path='/movie/:id' component={Movie}/>
      </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
