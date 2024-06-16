const con = require("../../config/dbconfig")

const mangaDao = {

    findAll: (req, res)=> {
        con.execute(
            `SELECT * FROM ${manga};`,
            (error, rows)=> {
                if(!error) {
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
    },

    // findById: (req, res, id)=> {
    //     con.execute(
    //         `SELECT * FROM user WHERE user_id
    //         = ${id};`,
    //         (error, rows)=> {
    //             if (!error) {
    //                 if (rows.length === 1) {
    //                     res.json(...rows)
    //                 } else {
    //                     res.json(rows)
    //                 }
    //             } else {
    //                 console.log("DAO ERROR:", error)
    //             }
    //         }
    //     )
    // },

    sort: (req, table)=> {
        con.execute(
            `SELECT * FROM ${table} ORDER BY ;`,
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

module.exports = mangaDao