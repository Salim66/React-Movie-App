import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      movies: [
        {name: 'Fast 9', year: 2020},
        {name: 'Fast X', year: 2022},
        {name: 'Fast 11', year: 2023},
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <h1>Welcome To ThereSixtyDegree</h1>
        <p>My favorite movie is { this.state.movies[0].name } { this.state.movies[0].year }</p>
        <p>My favorite movie is { this.state.movies[1].name } { this.state.movies[1].year }</p>
        <p>My favorite movie is { this.state.movies[2].name } { this.state.movies[2].year }</p>
        <button onClick={ () => {
          this.setState({ 
            movies : [
              {name: 'Fast 12', year: 2025},
              {name: 'Fast X', year: 2022},
              {name: 'Fast 11', year: 2023},
            ]
           });
        } }>Fast 12</button>
      </div>
    );
  }
}

export default App;
