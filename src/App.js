import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './Components/Movie-List/Movie-List';

class App extends Component {
  constructor(){
    super();

    this.state = {
      movies: [],
      showMovies: false,
      searchInput: '',
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
    .then((response) => response.json())
    .then((data) => this.setState(() => {
      return { movies: data, showMovies: true }
    }))
  }

  searchMovieHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchInput: search }
    });
  }

  render(){
    let { showMovies, movies, searchInput } = this.state;

    const filteredMovies = movies.filter((movie) => {
      return movie.Title.toLocaleLowerCase().includes(searchInput);
    });

    let renderMovies = 'Loading Movies....';

    if(showMovies){
      renderMovies = <MovieList movies={filteredMovies} />;
    }
    
    return (
      <div className="App">
        <h1>Welcome To ThereSixtyDegree</h1>
        <input type="search" onChange={ this.searchMovieHandler } />
        { renderMovies }
      </div>
    );
  }
}

export default App;
