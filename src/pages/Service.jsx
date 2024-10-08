import React from 'react'
import Loader from './Loader'
import videoSrc from "../../src/assets/background.mp4";


function Service() {

const content = <p>This is a service page </p>


  return (
    <div>
     
    <Loader videoSrc={videoSrc}  content={content}  />
    
    </div>
  )
}

export default Service