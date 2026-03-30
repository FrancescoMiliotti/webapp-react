import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard"
import axios from "axios";
import { useParams } from "react-router-dom";


function DettagliMovie() {

    const { id } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3001/movies/${id}`).then(response => {
            console.log(response.data);
            setMovie(response.data);
        }).catch(err => console.error("ops..", err.message));
    },[]);



    return (
        <div>
            <h1>Recensione Film</h1>
            <img src={`http://localhost:3001/movies_cover/${movie.image}`} className="img-review" alt={movie.image} />
            <h2>{movie.title}</h2>
            
            <div className="flex-container flex-wrap gap-1">
                {movie.reviews?.map(review => <ReviewCard reviews={review} key={review.id}/>)}
               

            </div>

             <Link className="btn" to="/Movies">RITORNA alla lista dei Film</Link>


        </div>

    );
}

export default DettagliMovie


/*<div className="flex-container flex-wrap gap-1">
                {reviews.map(review => <ReviewCard reviews={review} key={review.id}/>)}

            </div>

            <Link className="link" to={`/DettagliMovie/${movie.id}`}>Recensioni Film</Link>*/