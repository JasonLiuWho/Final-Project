import { Link } from "react-router-dom"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="text-capitalize text-center">
                            <h1 className="manga-title">No Mangas</h1>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <nav className="nav justify-content-end text-capitalize mt-1">
                            <Link to="/" className="nav-link">home</Link>
                            <Link to="/manga" className="nav-link">manga</Link>
                            <Link to="/login" className="nav-link">sign up</Link>
                            <Link to="/contact" className="nav-link">contact</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header