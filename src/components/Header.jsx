import '../Home.css'
import { Link } from "react-router-dom"

function Header() {
    return(
        <header className ="header">
            <h2>Doggy Daycare</h2>
            <nav>
                <Link to="/">Hem</Link>
                <Link to="/dogs">Våra hundar</Link>
            </nav>
        </header>
    )
}

export default Header