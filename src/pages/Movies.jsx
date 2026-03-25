

import FilmCard from "../components/FilmCard";



function Movies() {

    const movie = [{

        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"

    },
    {
        id: 2,
        title: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    },
    {
        id: 3,
        title: "The Matrix",
        director: "The Wachowskis",
        year: 1999,
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    }

    ];

    return (
        <div>

            <h1>Ecco la lista dei nostri film</h1>
            <div className="flex-container flex-wrap gap-1">
                <FilmCard movies={movie}/>

            </div>

        </div>
    )
}

export default Movies




