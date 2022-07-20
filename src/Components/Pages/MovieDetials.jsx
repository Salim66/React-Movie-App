import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const [movie, setMovie] = useState('');
    const params = useParams();

    useEffect(() => {
        const getMovie = async () => {
            const  result = await fetch(`http://localhost:5050/Movies/${params.id}`)
            const data = await result.json();
            setMovie(data);
        }
        getMovie();
    },[]);
    const { id,Poster, Title, Year, Runtime } = movie;
    return (
        <div className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ Poster } alt={ Title } />
            <div className="flex flex-col justify-between p-4">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ Title }</h5>
                <span className="mr-4">{ Year }</span>
                <span>{ Runtime }</span>
            </div>
        </div>
    );
}

export default MovieDetails;