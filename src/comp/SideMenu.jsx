import axios from 'axios'
import { useEffect, useState } from 'react'

const SideMenu = () => {
    const [posts, setPosts] = useState([])
    const loadPosts = async () => {
        try {
            const res = await axios('https://dummyjson.com/posts')
            setPosts(res.data.posts)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        loadPosts();
    }, [])
    return (
        <div className='side-menu'>
            <h3>Latest Post</h3>
            <div className="posts">
                {
                    posts.slice(0, 5).map(post => <div key={post.id}>
                        <h4><a href={`/article/2`}>{post.title}</a></h4>
                        <p>{post.body.slice(0, 100)}</p>
                    </div>)
                }
            </div>
        </div>
    )
}

export default SideMenu