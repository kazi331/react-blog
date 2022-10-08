import { db } from '../db.js'
import bcrypt from 'bcryptjs'

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
            return res.status(200).json({data, message: 'User has been created!'});
        })
    });
};


//login route
export const login = (req, res) => {
    res.json('user login')
}


// logout route
export const logout = (req, res) => {
    res.json('user login')
}