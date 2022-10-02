import axios from 'axios'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import TopicCard from './TopicCard';
const Topic = () => {
  const [posts, setPosts] = useState([]);
  const [tag, setTag] = useState({});

  const TIMEOUT_INTERVAL = 60 * 1000;

  const { topic } = useParams();

  // loads all dev.to tags 
  const loadTags = async () => {
    const devTags = `https://dev.to/api/tags/?per_page=500`;
    try {
      const tags = await axios.get(devTags)
      const selectedTag = tags.data?.find(tag => tag.name == topic)
      setTag(selectedTag)
    } catch (err) {
      console.log(err)
    }
  }

  // load post according to tags 
  const loadPosts = async () => {
    // const dummyjson = 'https://dummyjson.com/posts'
    const devjs = `https://dev.to/api/articles?tag=${topic || 'python'}&per_page=50`
    try {
      const res = await axios.get(devjs, { timeout: TIMEOUT_INTERVAL })
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    loadPosts();
    loadTags();
  }, [topic]);

  // handle 0 posts in topic component 
  if (posts.length < 1) {
    return 'loading...'
  }
  return (
    <>
      <TopicCard tag={tag} />
      <div className='topic'>
        {
          posts?.map((post) => {
            const { title, description, id, tag_list, url, cover_image, social_image } = post;
            return (
              <div key={id} className="post">
                <img src={cover_image || social_image} alt="" />
                <a href={url} target="_blank" rel="noopener noreferrer" ><h3 className="post-title"> {title}</h3></a>
                <p>{description}</p>
                <div className="tags">
                  {tag_list.map((tag, i) => <span key={i}> <Link to={`/topic/${tag}`} >#{tag} </Link> </span>)}
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Topic