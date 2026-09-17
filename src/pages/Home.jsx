import '../Home.css'
import Header from '../components/Header'
import { Link } from "react-router-dom"

function Home() {
    return(
        <main className="home">
            <Header />
            <section className='hero'>
                <div className="hero-text">
                     <h1>Välkommen till Doggy Daycare!</h1>
                     <p>En skojig och harmonisk plats hundar</p>
                     <Link to="/dogs">Se våra hundar</Link>
                 </div>
            </section>
        </main>
    )
}

export default Home