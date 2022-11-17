import { db } from "../db.js"

// GET ALL POSTS
export const getPosts = (req, res) => {
    // console.log(req.query.cat)
    const q = req.query.cat ? "SELECT * FROM posts where category=?" : "SELECT * FROM posts"
    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}

// GET Single POST
export const getPost = (req, res) => {

    const q = "SELECT `username`, `title`, `desc`, `img`, `category`, `date`, `uid` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id = ?"
    // console.log(req.params.id)
    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.json(err)
        return res.status(200).json(data)
    })
}

// ADD NEW POST
export const addPost = (req, res) => {
    res.json('Add new post')
}

// UPDATE POST
export const updatePost = (req, res) => {
    res.json('Add new post')
}

// DELETE POST
export const deletePost = (req, res) => {
    res.json('Delete post')
}

