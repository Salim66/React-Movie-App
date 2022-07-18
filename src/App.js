import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
    .then((response) => response.json())
    .then((data) => this.setState(() => {
      return { movies: data }
    }))
  }

  render(){
    return (
      <div className="App">
        <h1>Welcome To ThereSixtyDegree</h1>
        {
          this.state.movies.map((movie) => {
            return (
              <h2 key={ movie.Title }>
                My favorite movie is { movie.Title } { movie.Year }
              </h2>
            )
          })
        }
      </div>
    );
  }
}

export default App;
