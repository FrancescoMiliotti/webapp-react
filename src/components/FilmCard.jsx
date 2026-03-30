import { Link, NavLink } from "react-router-dom"


function FilmCard({ movies }) { 

    

    
    return (
        <>
            {movies.map((movie, i) => (
                <div className="card" key={movie.id || i}>
                    <h2>{movie.title}</h2>
                    <img src={`http://localhost:3001/movies_cover/${movie.image}`} className="img" alt={movie.image} />
                    <h3>{movie.director}</h3>
                    <p>{movie.release_year}</p>
                    <p>{movie.abstract}</p>
                    <Link className="link" to={`/DettagliMovie/${movie.id}`}>Recensioni Film</Link>
                    
                    
                    
                </div>
            ))}

            
        </>
    );
}

export default FilmCard

/*<Link className="link" to={`/ReviewCard/${movie.id}`}>Recensioni Film</Link>*/

