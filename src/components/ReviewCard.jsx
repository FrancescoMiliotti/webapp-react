import { Link, NavLink } from "react-router-dom"


function ReviewCard({ review }) {

    const {image, name, vote, text} = review;




    return <div className="card" >
        <img src={image} className="img" alt={name} />
        <h3>Name :{name}</h3>
        <span>Voto: {vote}</span>
        <p>Review :{text}</p>
        <Link className="link" to={`/Movies`}>Torna alla lista dei Film</Link>
    </div>

}



export default ReviewCard

