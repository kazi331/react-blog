import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../db.js';


// register route
export const register = (req, res) => {
    // CHECK EXISTING USER 
    const q = "SELECT * FROM users WHERE email = ? OR username = ?"
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json('User already exists!');

        // HASH THE USER PASSWORD AND STOE INTO DATABASE
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?)"
        //  INSERT INTO `blog`.`users` (`id`, `username`, `email`, `password`, `avatar`) VALUES ('2', 'test2', 'test', 'test', 'test2');

        const VALUES = [req.body.username, req.body.email, hash];

        // console.log(VALUES)
        db.query(q, [VALUES], (err, data) => {
            if (err) return res.json(err);
            // if(data) res.json(data);
            res.cookie("user_access_token", token, { httpOnly: true });
            return res.status(200).json({ data, message: 'User has been created!' });
        })
    });
};


//login route
export const login = (req, res) => {
    // console.log(req.body)
    // CHECH IF USE EXISTS
    const q = "SELECT * from users WHERE username = ?"

    db.query(q, [req.body.username, req.body.password], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).send("User not found!");

        // CHECK PASSWORD WITH bcrypt
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        // console.log(isPasswordCorrect)
        if (!isPasswordCorrect) { return res.status(400).json('Wrong user or password!') };

        // JSONWEBTOKEN JWT
        const token = jwt.sign({ id: data[0].id }, "myjwtkey");

        const { password, ...other } = data[0]

        res.cookie("user_access_token", token, { httpOnly: false });
        res.status(200).json(other)
        

    })

}


// logout route
export const logout = (req, res) => {
    res.json('user login')
}