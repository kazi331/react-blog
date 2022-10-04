import express from "express";
import postRoute from './routes/posts.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js';
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors())

// routes 
app.use('/api/posts', postRoute)
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


// home route
app.get('/', (req, res) => {
    res.send('Welcome,')
})
// port 
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Connected!')
})