const express = require("express")
const router = express.Router()

const port = process.env.port || 3005

router.get("/api", (req, res)=> {
    res.json({
        "All Users": `http://localhost:${port}/api/user`,
        "Mangas": `http://localhost:${port}/api/manga`,
        "Authors": `http://localhost:${port}/api/author`,
        "Genres": `http://localhost:${port}/api/genre`,
        "Publishers": `http://localhost:${port}/api/publisher`
    })
})

const tables = ["user", "manga", "author", "genre", "publisher"]

// forEach loop for all tables(reusealbe code)
tables.forEach(table => {
    router.use(`/api/${table}`, require(`./api/${table}Routes`))
})

router.get("*", (req, res)=> {
    if (req.url == "/favicon.ico") {
        res.end()
    } else {
        res.send("<h1>404 Error. This page does not exist.<h1>")
    }
})

module.exports = router