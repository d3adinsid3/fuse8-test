import React, {useState, useEffect} from 'react';
import './app.css'
import Filter from "../filter/Filter";

const getResource = async (url) => {
    const res = await fetch(`${url}`)
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
    }
    return await res.json()
}

const App = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getResource(`https://603e38c548171b0017b2ecf7.mockapi.io/homes`).then((data) => {
                setItems(data)
            }
        )
    }, [])

    return (


        <div className="container">
            <header className="masthead clear">
                <div className="centered">

                    <h1> Our Latest Developments </h1>

                </div>
            </header>

            <Filter/>

            <main>

                <div className="centered">

                        <section className="cards">
                            {items.map(({id, title, price, address, type}) => {
                                return (
                            <article key={id} className="card">
                                <a href="#">
                                    <picture className="thumbnail">
                                        <img
                                            src="https://cdn.shopify.com/s/files/1/0567/3873/files/54980-1200_large.jpg?v=1594835310"
                                            alt="xexe)"/>
                                    </picture>
                                    <div className="card-content">

                                        <h2>{title}</h2>
                                        <p>{address}</p>
                                        <p>New Properties for Sale from {price} <br/>
                                            Shared Ownership Available </p>

                                    </div>
                                </a>
                            </article>
                                )
                            })
                            }
                        </section>

                </div>

            </main>
        </div>
    )
}

export default App