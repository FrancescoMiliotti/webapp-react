import { Link, NavLink } from "react-router-dom"


function HomePage() {
    return <div>

        <h1>Benvenuti nella HomePage</h1>
        <div className= "flex-container">
            <Link className="btn" to="/Movies">VAI alla lista dei Film</Link>
        </div>

    </div>
}

export default HomePage