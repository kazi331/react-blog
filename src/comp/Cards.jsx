import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';
const Cards = () => {
    const [posts, setPosts] = useState([]);
    const cat = useLocation().search;

    const loadPosts = async () => {
        // const dummyjson = 'https://dummyjson.com/posts'
        // const devjs = 'https://dev.to/api/articles?tag'
        const localPost = `http://localhost:5000/api/posts${cat}`
        try {
            const res = await axios.get(localPost)
            setPosts(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    // console.log(posts)
    useEffect(() => {
        loadPosts();
    }, [cat]);
    if (posts.length < 1) {
        return (
            <h3>Loading....</h3>
        )
    }
    return (
        <div className='cards'>
            {
                posts?.map(post => <Card key={post.id} post={post} />)
            } 
        </div>
    )
}

export default Cards