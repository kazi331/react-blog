import { db } from "../db.js";
export const addUser = (req, res) => {
    res.json('add user');
}
export const users = (req, res) => {
    const q = "SELECT * from users"
    db.query(q, (err, data) => {
        if (err) return res.send(err)
        return res.json(data)
    })
}