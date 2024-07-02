const con = require("../../config/dbconfig")

const genreDao = {
    table: "genre",


    sort: (req, table)=> {
        con.execute(
            `SELECT * FROM ${table} ORDER BY genre_id ;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log("DAO ERROR:", error)
                }
            }
        )
    }
}

module.exports = genreDao