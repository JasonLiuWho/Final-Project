import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import axios from "axios"

const Single =()=> {

    const [ item, setItem ] = useState({})
    const params = useParams()

    const url = `http://localhost:3005/api/manga/${params.id}`

    useEffect(()=> {
        axios.get(url).then(res => setItem(res.data))
    }, [])


    return (
        <main className="singleMain" id="singleMain">
            <div className="container">
                <div className="row">
                    <div className="infoImg col-md-5 mt-3">
                        <img src={`/images/${item.imgUrl}`} alt="" className="img-fluid image h-75"/> 
                    </div>
                    <div className="info col-md-7 mt-5"> 
                        <ul className="image-ul list-unstyled">
                            <li>Title: {item.title}</li>
                            <li>Author: {item.author}</li>
                            <li>Genre: {item.manga_to_genre}</li>
                            <li>Volume: {item.volume}</li>
                            <li>Description: {item.mangaDesc}</li>
                            <li>Released Date: {item.releasedDate}</li>
                            <li>Publisher: {item.publisher}</li>
                            <li>Price: ${item.price}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
    
}

export default Single