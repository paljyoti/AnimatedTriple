import React from 'react'
import Loader from './Loader'
import videoSrc from "../../src/assets/blackNwhite.mp4"

function Blog() {



  return (
    <div>
   <Loader videoSrc={videoSrc}  />
   
   <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg shadow-lg max-w-4xl w-full p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center">My Blog</h1>
        </header>
        <main>
          <article className="mb-6 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Blog Post Title</h2>
            <p className="mt-2">
              This is a brief excerpt of the blog post. It can give readers a preview of the content.
            </p>
          </article>
          <article className="mb-6 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold">Another Post Title</h2>
            <p className="mt-2">
              Here’s another excerpt from a different blog post. Engaging content is key!
            </p>
          </article>
        </main>
        <footer className="mt-8 text-center">
          <p>© 2024 My Blog. All rights reserved.</p>
        </footer>
      </div>
    </div>

    
    </div>
  )
}

export default Blog