import react, {useState, useEffect} from 'react';
import movieList from './movie';
import './app.css';

const app = {} => {
    const [movies, setmovies] = useState([]);
    return <div>hello! </div>;
};

});

const getMovieRequest = async () => {
    const url = ' '
    const response = await fetech(url);
    const responseJson = await response.json ();

    setmovies (responseJson.Search);
};

useEffect {() => 
    getMovieRequest ();
};

return (
    <div classname = 'container-fluid' 'movie-app' >
        <div classname = "row" >
        </div>
        <movieList movies {movies} />
    </div>
);

export default index; 