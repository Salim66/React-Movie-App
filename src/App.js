import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      movies: [],
      showMovies: false
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
    let { showMovies } = this.state;
    let renderMovies = null;

    if(showMovies){
      renderMovies = (
        <div>
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
    
    return (
      <div className="App">
        <h1>Welcome To ThereSixtyDegree</h1>
        <button onClick={ () => {
          this.setState({ showMovies: !showMovies })
        } }>Show Movies</button>
        { renderMovies }
      </div>
    );
  }
}

export default App;
