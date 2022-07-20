import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import MovieList from "./Components/Movie-List/Movie-List";
import About from "./Components/Pages/About";

const App = () => {

  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
      .then((response) => response.json())
      .then((apiMovies) => {
        setMovies(apiMovies);
        setShowMovies(true);
      });
  }, []);

  const searchMoviesHandler = (event) => {
    const search = event.target.value.toLocaleLowerCase();
    setSearchInput(search);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.Title.toLocaleLowerCase().includes(searchInput);
  });

  let renderMovies = "Loading movies...";

  if (showMovies) {
    renderMovies = <MovieList movies={filteredMovies} />;
  }
  
  return (
    <div className="max-w-6xl mx-auto bg-slate-200">
      <h1 className='flex justify-center text-2xl font-semibold'>Welcome To ThereSixtyDegree</h1>
      <div className='flex justify-center'>
        <input className='m-2 p-2 text-grap-400 rounded-md' type="search" onChange={ searchMoviesHandler } />
      </div>
      <Routes>
        <Route path="/" element={ renderMovies } />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );


}

export default App;

// import { Component } from 'react';
// import './App.css';
// import MovieList from './Components/Movie-List/Movie-List';

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       movies: [],
//       showMovies: false,
//       searchInput: '',
//     }
//   }

//   componentDidMount() {
//     fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
//     .then((response) => response.json())
//     .then((data) => this.setState(() => {
//       return { movies: data, showMovies: true }
//     }))
//   }

//   searchMovieHandler = (event) => {
//     const search = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchInput: search }
//     });
//   }

//   render(){
//     let { showMovies, movies, searchInput } = this.state;

//     const filteredMovies = movies.filter((movie) => {
//       return movie.Title.toLocaleLowerCase().includes(searchInput);
//     });

//     let renderMovies = 'Loading Movies....';

//     if(showMovies){
//       renderMovies = <MovieList movies={filteredMovies} />;
//     }
    
//     return (
//       <div className="max-w-6xl mx-auto bg-slate-200">
//         <h1 className='flex justify-center text-2xl font-semibold'>Welcome To ThereSixtyDegree</h1>
//         <div className='flex justify-center'>
//           <input className='m-2 p-2 text-grap-400 rounded-md' type="search" onChange={ this.searchMovieHandler } />
//         </div>
//         { renderMovies }
//       </div>
//     );
//   }
// }

// export default App;
