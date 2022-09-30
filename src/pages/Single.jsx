import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Single = () => {
    const [post, setPost] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => setPost(res.data))

    }, [])
    console.log(post)
    return (
        <div>
            <p>Id: {post.id}</p>
           <h1>{post.title}</h1>
           <p>{post.body}</p>
        </div>
    );
};

export default Single;