import { useEffect, useState } from 'react'
import '../Dogs.css'

const DOGS_URL = 'https://api.jsonbin.io/v3/b/68ccf99ad0ea881f4082d5b8'

function Dogs() {
  const [dogs, setDogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    // Cancel the request if the user leaves this page.
    const controller = new AbortController()

    async function fetchDogs() {
      try {
        const response = await fetch(DOGS_URL, {
          signal: controller.signal,
        })

        // fetch does not throw automatically for HTTP errors.
        if (!response.ok) {
          throw new Error(`Kunde inte hämta hundarna (HTTP ${response.status}).`)
        }

        const data = await response.json()

        // JSONBin wraps the saved data in a record property.
        if (!Array.isArray(data.record)) {
          throw new Error('Hundarnas data har ett oväntat format.')
        }

        if (!controller.signal.aborted) {
          setDogs(data.record)
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err instanceof Error ? err.message : 'Något gick fel.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchDogs()

    return () => controller.abort()
  }, [])

  return (
    <main className="dogs-page">
      <h1>Våra hundar</h1>
      <p className="dogs-page__intro">Lär känna våra vänner på Doggy Daycare.</p>

      {loading && <p role="status">Laddar hundarna…</p>}
      {error && <p className="dogs-page__error" role="alert">{error} Försök ladda om sidan.</p>}
      {!loading && !error && (
        dogs.length === 0 ? (
          <p>Det finns inga hundar att visa just nu.</p>
        ) : (
          <ul className="dogs-page__grid">
            {dogs.map((dog, index) => (
              <li className="dogs-page__card" key={dog.chipNumber ?? index}>
                <div className="dogs-page__photo">
                  <span>Bild saknas</span>
                  {dog.img && (
                    <img
                      src={dog.img}
                      alt={dog.name || 'Hund på Doggy Daycare'}
                      loading="lazy"
                      onError={(event) => { event.currentTarget.hidden = true }}
                    />
                  )}
                </div>
                <div className="dogs-page__info">
                  <h2>{dog.name || 'Namn saknas'}</h2>
                  <p>{dog.breed || 'Okänd ras'}</p>
                </div>
              </li>
            ))}
          </ul>
        )
      )}
    </main>
  )
}

export default Dogs
