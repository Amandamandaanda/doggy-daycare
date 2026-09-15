import '../Home.css'
import Header from '../components/Header'

function Home() {
    return(
        <main className="home">
            <Header />
            <section className='hero'>
                <div className="hero-text">
                     <h1>Välkommen till Doggy Daycare!</h1>
                     <p>En skojig och harmonisk plats hundar</p>
                     <button>Se våra hundar</button>
                 </div>
            </section>
        </main>
    )
}

export default Home