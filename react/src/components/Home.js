const Home =()=> {

    return (
        <main className="main" id="homeMain">
            <div className="container">
                <div className="carousel slide" id="carousel" data-bs-ride="carousel">
                    <div className="carousel-inner mt-3">
                        <div className="carousel-item active">
                            <img src="images/store3.jpg" className="img-fluid image d-block ax-auto w-100 h-100" alt="manga book shelf">
                            </img>
                        </div>
                        <div className="carousel-item">
                            <img src="images/manga2.jpg" className="img-fluid image d-block mx-auto w-100 h-100" alt="manga book shelf">
                            </img>
                        </div>
                        <div className="carousel-item">
                            <img src="images/store3.jpg" className="img-fluid image d-block mx-auto w-100 h-100" alt="manga book shelf">
                            </img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">next</span>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Home