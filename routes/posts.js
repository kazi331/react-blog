import express from 'express';
import { addPost, deletePost, getPost, getPosts, updatePost } from '../controllers/post.js';
const router = express.Router();

router.get('/', getPosts) // get all post 
router.get('/:id', getPost ) // get single post
router.post('/add', addPost) // add new post
router.put('/update/:id', updatePost) // update post
router.delete('/delete/:id', deletePost) // delete post




export default router;