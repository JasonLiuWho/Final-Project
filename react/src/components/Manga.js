import { useState, useEffect } from "react"
import axios from "axios"
import Card from "./Card"


const Mangas =()=> {

    const [ manga, setMangas ] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3005/api/manga").then(res => {
            setMangas(res.data)
        })
    }, [])

    const mangaCards = manga.map(manga => {

        return <Card
                key={manga.manga_id}
                id={manga.manga_id}
                title={manga.title}
                imgUrl={manga.imgUrl}
                path={"manga"}
            />
    })

    return (
        <main className="main" id="mangaMain">
            <div className="container">
                <div className="row row-cols-1-md-5 g-4 mt-1">
                    { mangaCards }
                </div>
            </div>
        </main>
    )
}

export default Mangas