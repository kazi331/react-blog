import { db } from "../db.js"

export const addPost = (req, res) => {
    res.json('Add new post')
}

export const posts = (req, res) => {
    const q = "SELECT * FROM posts"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.send(data)
    })

}