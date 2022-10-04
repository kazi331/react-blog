import express from 'express';
import { addPost, posts } from '../controllers/post.js';
const router = express.Router();

router.get('/1', (req, res) => {
    res.json('1st post')
})
router.get('/add', addPost)

router.get('/', posts)




export default router;