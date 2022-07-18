import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      movies: [
        { id: 1, name: 'Fast 9', year: 2020},
        { id: 2, name: 'Fast X', year: 2022},
        { id: 3,name: 'Fast 11', year: 2023},
      ]
    }
  }

  changeName = (event) => {
    this.setState({ 
      movies : [
        { id: 1, name: event.target.value, year: 2025},
        { id: 2, name: 'Fast X', year: 2022},
        { id: 3, name: 'Fast 11', year: 2023},
      ]
     });
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome To ThereSixtyDegree</h1>
        {
          this.state.movies.map((movie) => {
            return (
              <h2 key={ movie.id }>
                My favorite movie is { movie.name } { movie.year }
              </h2>
            )
          })
        }
        <input type="text" onChange={ this.changeName } value={ this.state.movies[0].name } />
      </div>
    );
  }
}

export default App;
