const con = require("../../config/dbconfig")

const publisherDao = {
    table: "publisher",

    sort: (req, table)=> {
        con.execute(
            `SELECT * FROM ${table} ORDER BY publisher_id ;`,
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

module.exports = publisherDao