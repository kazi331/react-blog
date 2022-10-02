import axios from 'axios'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const TIMEOUT_INTERVAL = 60 * 1000
    const loadPosts = async () => {
        // const dummyjson = 'https://dummyjson.com/posts'
        const devjs = 'https://dev.to/api/articles?tag'
        try {
            const res = await axios.get(devjs, { timeout: TIMEOUT_INTERVAL })
            setPosts(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        loadPosts();
    }, []);
    console.log(posts)
    return (
        <div className='topic'>
            {
                posts?.map((post) => {
                    const { title, description, id, tag_list, url, cover_image, social_image } = post;
                    return (
                        <div key={id} className="post">
                            <img src={cover_image || social_image} alt="" />
                            <a href={url} target="_blank" rel="noopener noreferrer" ><h3 className="h3"> {title}</h3></a>
                            <p>{description}</p>
                            <div className="tags">
                                {tag_list.map((tag, i) => <span key={i}> <Link to={`/topic/${tag}`} >#{tag} </Link> </span>)}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllPosts