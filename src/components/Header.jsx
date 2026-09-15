import '../Home.css'

function Header() {
    return(
        <header className ="header">
            <h2>Doggy Daycare</h2>
            <nav>
                <a href="/">Hem</a>
                <a href="/dogs">Våra hundar</a>
            </nav>
        </header>
    )
}

export default Header