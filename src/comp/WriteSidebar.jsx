import React from 'react'

function WriteSidebar() {
    return (
        <div className="write-sidebar">
            <div className="publish">
                <h2>Publish Post</h2>
                <h4>Status: <span>Draft</span></h4>
                <h4>Visibility: <span>Public</span></h4>
                <div className="btns">
                    <button>Save Draft</button>
                    <button>Update</button>
                </div>
            </div>
            <div className="category">
                <h3>Category</h3>
                <label className='cat' htmlFor="javascript"> Javascript
                    <input type="radio" name="cat" id="javascript" />
                    <span className='radioBox'></span>
                </label>
                <label className='cat' htmlFor="python"> python
                    <input type="radio" name="cat" id="python" />
                    <span className='radioBox'></span>
                </label>
                <label className='cat' htmlFor="java"> java
                    <input type="radio" name="cat" id="java" />
                    <span className='radioBox'></span>
                </label>
                <label className='cat' htmlFor="webDev"> webDev
                    <input type="radio" name="cat" id="webDev" />
                    <span className='radioBox'></span>
                </label>
                <label className='cat' htmlFor="programming"> programming
                    <input type="radio" name="cat" id="programming" />
                    <span className='radioBox'></span>
                </label>
                <label className='cat' htmlFor="react"> react
                    <input type="radio" name="cat" id="react" />
                    <span className='radioBox'></span>
                </label>
                <label className='cat' htmlFor="nextjs"> next js
                    <input type="radio" name="cat" id="nextjs" />
                    <span className='radioBox'></span>
                </label>
                <label className='cat' htmlFor="tutorial"> tutorial
                    <input type="radio" name="cat" id="tutorial" />
                    <span className='radioBox'></span>
                </label>
                <label className='cat' htmlFor="beginner"> beginner
                    <input type="radio" name="cat" id="beginner" />
                    <span className='radioBox'></span>
                </label>

            </div>
        </div>
    )
}

export default WriteSidebar