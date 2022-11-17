import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import WriteSidebar from '../comp/WriteSidebar';

const Write = () => {
  const [value, setValue] = useState('');

  console.log(value)
  return (
    <div className='container write'>
      <div className="content">
        <h3>Write new post</h3>
        <form>
          <input type="text" placeholder='Post Title' />
        </form>
        <div className="quill">
          <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Start Typing... " />
        </div>
      </div>
      <div className="write-menu">
        <WriteSidebar />
      </div>
    </div>
  )
}

export default Write