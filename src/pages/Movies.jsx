

import { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";
import axios from "axios";



function Movies() {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/movies").then(response => { 
            console.log(response.data);
            setMovies(response.data);
    }).catch(err => console.error("ops..", err.message));
    }, []);

    return (
        <div>

            <h1>Ecco la lista dei nostri film</h1>
            <div className="flex-container flex-wrap gap-1">
                <FilmCard movies={movies}/>

            </div>

        </div>
    )
}

export default Movies




