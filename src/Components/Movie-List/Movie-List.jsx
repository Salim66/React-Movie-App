import { Component } from 'react';
import MovieCard from '../Movie-Card/Movie-Card';

class MovieList extends Component {
    render(){
        return(
            <div>
                {
                this.props.movies.map((movie) => {
                    return (
                        <MovieCard movie={ movie } />
                    )
                })
                }
            </div>
        )
    };
}

export default MovieList;