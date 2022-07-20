
const MovieList = ({ movie }) => {

    const { Poster, Title, Year, Runtime } = movie;

    return (
                <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ Poster } alt={ Title } />
                    <div className="flex flex-col justify-between p-4">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ Title }</h5>
                        <span className="mr-4">{ Year }</span>
                        <span>{ Runtime }</span>
                    </div>
                </div>
            );
}

export default MovieList;

// import { Component } from "react";


// class MovieCard extends Component {
//     render(){

//         const { Poster, Title, Year, Runtime } = this.props.movie;

//         return (
//             <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//                 <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ Poster } alt={ Title } />
//                 <div className="flex flex-col justify-between p-4">
//                     <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ Title }</h5>
//                     <span className="mr-4">{ Year }</span>
//                     <span>{ Runtime }</span>
//                 </div>
//             </div>
//         );
//     };
// }

// export default MovieCard;