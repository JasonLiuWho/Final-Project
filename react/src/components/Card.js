import { Link } from "react-router-dom"

const Cards =(props)=> {

    console.log(props)

    return (
        <div className="col-md-3">
            <div className="card h-100">
                <img src={`/images/${props.imgUrl}`} alt={props.title} className="img-fluid image card-img-top"/>
                <div className="card-body">
                    <h2 className="card-title text-center nav-link">
                        <Link to={`/${props.path}/${props.id}`} className="text-decoration-none">
                        {props.title}
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Cards