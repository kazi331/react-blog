import mysql from 'mysql2'

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '01612178331@Ks',
    database: 'blog',
    // multipleStatements: true,
    // insecureAuth : true
})

