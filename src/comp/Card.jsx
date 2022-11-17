import { Link } from 'react-router-dom';

const Card = ({ post }) => {
    const { title, desc, id, category, tags, url, img } = post;
    return (
        <article key={id} className="card">
            <Link to={`/article/${id}`} >
                <img src={img} alt="" />
            </Link>
            <Link  to={`/article/${id}`} ><h3 className="post-title"> {title}</h3></Link>
            <p>{category}</p>
            <p>{desc}</p>
            <div className="tags">
                {
                    // tags.map((tag, i) => <span key={i}> <Link to={`/topic/${tag}`} >#{tag} </Link> </span>)
                }
            </div>
        </article>
    )
}

export default Card