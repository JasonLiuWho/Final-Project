import { Link } from "react-router-dom"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="cols-md">
                    <h1 className="display-1 text-capitalize text-md-center">
                        <h1 className="title">No Manga</h1>
                    </h1>
                </div>
                <div className="cols-md">
                    <nav className="nav justify-content-around text-capitalize">
                        <Link to="/home">home</Link>
                        <Link to="/manga">manga</Link>
                        <Link to="/login">sign up</Link>
                        <Link to="/contact">contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header