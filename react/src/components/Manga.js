import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./Card"


const Mangas =()=> {

    const [ mangas, setMangas ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3005/api/manga").then(res => {
            setMangas(res.data)
        })
    }, [])

    const mangaCards = mangas.map(pc => {
        return <Card
                key={manga.manga_id}
                id={manga.manga_id}
                name={manga.name}
                imgUrl={manga.imgUrl}
                path={"/manga"}
            />
    })

    return (
        <main className="main" id="mangaMain">
            <div className="container">
                <h2>Manga's</h2>
                <div className="row row-cols-1-md-5 g-4">
                    { mangaCards }
                </div>
            </div>
        </main>
    )
}

export default Mangas