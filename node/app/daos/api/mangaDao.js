const con = require("../../config/dbconfig")

const mangaDao = {
    table: "manga",

    
    getInfo: (res, table, id)=> {
    
        con.execute(
            `SELECT m.manga_id, m.title, a.author, g.genre, m.volume, m.mangaDesc, m.releasedDate, p.publisher, m.price, m.imgUrl
            FROM manga m
            JOIN author a USING (author_id)
            JOIN genre g USING (genre_id)
            JOIN publisher p USING (publisher_id)
            WHERE m.manga_id = ${id}; `,
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
        },

    create: (req, res, table)=> {
        if (Object.keys(req.body).length === 0)
            {
            res.json({
                "error":true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')}=?`,
                values,
                (error, dbres)=> {
                    if (!error) {
                        res.json({
                            Last_id: dbres.insertId
                        })
                    } else {
                        console.log("Dao ERROR:", error)
                    }
                }
            )
        }
    },

    sort: (req, table)=> {
        con.execute(
            `SELECT * FROM ${table} ORDER BY manga_id ;`,
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