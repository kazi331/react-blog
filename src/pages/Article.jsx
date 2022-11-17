import axios from 'axios';
import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import cover from '../resources/cover.jpeg';
import { DeleteIcon, EditIcon } from '../resources/Icons';

const Article = () => {
    const [post, setPost] = useState()
    const { currentUser } = useContext(AuthContext)

    let { id } = useParams()
    const fetchPost = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/posts/' + id)
            setPost(res.data[0])
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchPost();
    }, [])
    if (!post) return 'loading...'
    console.log(post)
    return (
        <div className='single container'>
            <div className="content">
                <img className='thumbnail' src={post?.img} alt="" />
                <div className="content-body">
                    <div className="author">
                        {post.avatar && <Link to={`/author/${post.uid}`} > <img src={post.avatar} alt="" /></Link>}
                        <div>
                            <h2><Link to={`/author/${post.uid}`} >John doe</Link></h2>
                            {/* post date: moment js */}
                            <span>{moment(post.date).fromNow()} </span>
                        </div>
                        {currentUser?.id === post.uid && <div className="action">
                            <Link to={`/write/?id=2`} className='edit' type="submit"> {EditIcon} </Link>
                            <button className='del' type="submit"> {DeleteIcon} </button>
                        </div>}
                    </div>

                    <h1 className='post-title'>{post.title}</h1>
                    {/* Post Description */}
                    {post.desc}

                </div>
            </div>
            {/* <div className="menu">
                <SideMenu />
            </div> */}
        </div>
    );
};

export default Article;