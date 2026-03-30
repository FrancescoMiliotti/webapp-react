import { Link, NavLink } from "react-router-dom"


function FilmCard({ movies }) { 

    

    
    return (
        <>
            {movies.map((movie, i) => (
                <div className="card" key={movie.id || i}>
                    <h2>{movie.title}</h2>
                    <img src={movie.image} className="img" alt={movie.title} />
                    <h3>{movie.director}</h3>
                    <p>{movie.year}</p>
                    <Link className="link" to={`/Reviews/${movie.id}`}>Recensioni Film</Link>
                    
                    
                    
                </div>
            ))}

            
        </>
    );
}

export default FilmCard

/*<Link className="link" to={`/ReviewCard/${movie.id}`}>Recensioni Film</Link>*/

