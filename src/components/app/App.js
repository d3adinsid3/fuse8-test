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
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        getResource(`https://603e38c548171b0017b2ecf7.mockapi.io/homes`).then((data) => {
                setItems(data)
            }
        )
    }, [])

    const search = (items, searchInput) => {

        return items.filter((item) => {

            if (searchInput.length > 2) {
                return item.title
                    .toLowerCase()
                    .indexOf(searchInput.toLowerCase()) > -1
            } else return items

        })
    }

    const onLabelChange = (searchInput) => {
        setSearchInput(searchInput)
    }

    const visibleItems = search(items, searchInput)
    return (
        <div className="container">
            <div className="centered">

                <h1> Our Latest Developments </h1>

            </div>

            <Filter onLabelChange={onLabelChange}/>

            <main>

                <div className="centered">

                    <section className="cards">
                        {visibleItems.map(({id, title, price, address, type}) => {
                            return (
                                <article key={id} className="card">
                                    <a href={`/details/${id}`}>

                                        <div className='img_container'>
                                            <img
                                                src="https://cdn.shopify.com/s/files/1/0567/3873/files/54980-1200_large.jpg?v=1594835310"
                                                alt="xexe)"/>
                                            <div className={ type ==='IndependentLiving' ? "img_container_in" : "img_container_su" }>{type}</div>

                                        </div>


                                        <div className="card-content">

                                            <h2>{title}</h2>
                                            <p>{address}</p>
                                            <p>New Properties for Sale from <span
                                                className='price'>£{price.toLocaleString()}</span> <br/>
                                                Shared Ownership Available </p>

                                        </div>
                                    </a>
                                </article>
                            )
                        })
                        }
                    </section>
                    <button> see more ></button>

                </div>

            </main>
        </div>
    )
}

export default App