
import ReviewCard from "../components/ReviewCard"


function Reviews() {


    const fakereviews = {

        id: 1,
        movie_id: 1,
        name: "Alice",
        vote: 8,
        text: "A mind-bending masterpiece.",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"

    }


    const reviews = [
        fakereviews,
        fakereviews
    ];



    return (
        <div>
            <h1>Recensioni Film</h1>
            <div className="flex-container flex-wrap gap-1">
                {reviews.map(review => <ReviewCard review={review} key={review.id}/>)}

            </div>

        </div>
        
    );
}

export default Reviews