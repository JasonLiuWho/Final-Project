import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorPage from "./components/ErrorPage"
import Home from "./components/Home"
import Manga from "./components/Manga"
import Login from "./components/Login"
import Contact from "./components/Contact"

const App = ()=> {

    return(
        <>
            <Header />
                <Routes>
                    <Route path="/home" element={ <Home />} />
                    <Route path="/manga" element={ <Manga />} />
                    <Route path="/login" element={ <Login />} />
                    <Route path="/contact" element={ <Contact />} />
                    <Route path="*" element={ <ErrorPage />} />
                </Routes>
            <Footer />
        </>
    )
}

export default App