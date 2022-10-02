import { useState } from "react"
import { useParams } from "react-router-dom";

function TopicCard({ tag }) {
  const [follow, setFollow] = useState(false);
  const  {topic}  = useParams();
  
  if (!tag) {
    tag = {
      "id": 154,
      "name": topic,
      "bg_color_hex": "#9725ea",
      "text_color_hex": null
    }
  }
  console.log(tag)
  const src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png'

  return (
    <div className="topicCard" >
      <img className="logo" src={src} alt={tag.name} />
      <div className="content">
        <div className="title">
          <h2>{tag.name}</h2>
          <button className="main-btn" onClick={() => setFollow(!follow)}>{follow ? 'following' : 'follow'}</button>
        </div>
        <p>Once relegated to the browser as one of the 3 core technologies of the web, JavaScript can now be found almost anywhere you find code. JavaScript developers move fast and push software development forward; they can be as opinionated as the frameworks they use, so let's keep it clean here and make it a place to learn from each other!</p>
      </div>
    </div>
  )
}

export default TopicCard