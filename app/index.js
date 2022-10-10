import express from "express";
import postRoute from '../routes/posts.js';
import userRoute from '../routes/users.js';
import authRoute from '../routes/auth.js';
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes 
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


// Cookie test 
app.post('/signin', (req, res) => {
    res.cookie('test_cookie', 'my test cookie');
    res.send('Logged in')
});

// home route
app.get('/', (req, res) => {
    res.send('Welcome,')
})
// port 
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Connected!')
})