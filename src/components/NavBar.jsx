import { Link, NavLink } from "react-router-dom"


function NavBar() {
    return <nav className="navbar">
        <h1>My movies WebApp</h1>
        <nav>
            <NavLink className="btn" to="/">HomePage</NavLink>
            <NavLink className="btn" to="/Movies">Elenco Film</NavLink>
                        
        </nav>

    </nav>
}

export default NavBar