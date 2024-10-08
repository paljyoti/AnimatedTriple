import React from 'react'
import Loader from './Loader'
import videoSrc from "../../src/assets/blackNwhite.mp4"

function Blog() {

const content =  <p>This is a blog Page</p>

  return (
    <div>

 <Loader videoSrc={videoSrc} content={content} />
    </div>
  )
}

export default Blog