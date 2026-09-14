import heroImg from '../assets/dogs.jpg'

function Home() {
    return(
        <main>
            <section>
                <div>
                 <h1>Välkommen till Doggy Daycare!</h1>
                 <p>En skojig och harmonisk plats hundar</p>
                 <button>Se våra hundar</button>
            </div>
            <img src={heroImg} alt="Hundar på Doggy Daycare" />
            </section>
        </main>
    )
}

export default Home