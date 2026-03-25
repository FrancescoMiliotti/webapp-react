
function Reviews() {


    const review = [{

        id: 1,
        movie_id: 1,
        name: "Alice",
        vote: 8,
        text: "A mind-bending masterpiece.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"

    }]

    return (
        <div>
            <h1>Recensioni Film</h1>
            <div>
                {review.map((review) => (
                    <div className="card" key={review.id}>
                        <img src={review.image} className="img" alt={review.name} />
                        <h3>Name :{review.name}</h3>
                        <span>Voto: {review.vote}</span>
                        <p>Review :{review.text}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews