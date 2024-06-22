const con = require("../../config/dbconfig")

const authorDao = {
    table: "author",

    sort: (req, table)=> {
        con.execute(
            `SELECT * FROM ${table} ORDER BY author_id ;`,
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

module.exports = authorDao