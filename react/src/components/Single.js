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


                        <ul className="image-ul list-unstyled book-info">
                            <li className="sub-title mt-3">Title: {item.title}</li>
                            <li className="sub-title mt-3">Author: {item.author} </li>
                            <li className="sub-title mt-3">Genre: Shonen </li>
                            <li className="sub-title mt-3">Volume: {item.volume}</li>
                            <li className="sub-title mt-3">Description: {item.mangaDesc}</li>
                            <li className="sub-title mt-3">Released Date: {item.releasedDate}</li>
                            <li className="sub-title mt-3">Publisher: Viz Media</li>
                            <li className="sub-title mt-3">Price: ${item.price}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
    
}

export default Single