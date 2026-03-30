import { Link, NavLink } from "react-router-dom"


function ReviewCard({ reviews }) {






    return (
        <>

            <div className="card" key={reviews.id || i}>
                <h2>{reviews.name}</h2>
                <h3>Voto : {reviews.vote}</h3>
                <p>{reviews.text}</p>
                


            </div>

            

        </>
    );
}



export default ReviewCard

