import React, { useEffect, useState } from 'react'
import Post from './Post'

import "./App.css"
// const post1 = {
//   "user":"Alex",
//   "body":"this is the firs post"
// }

function App() {
  const [posts, setPosts] = useState([]);
  //connect to backend
  async function getPosts() {
    const response = await fetch('http://localhost:5000/api/todos');
    const data = await response.json()
    console.log(data.data.rows)
    setPosts(data.data.rows)
  }

  useEffect(() => { 
    getPosts()
   },[])


  return (
    
    <div className='container app'>
      <h1>hello there</h1>
      <div className="posts">
        {(posts.length>0)?
          ( posts.map((post) => (
            <Post post={post}/>
          ))):
          (<div className="empty">
              <h2>no movies found</h2>
          </div>)
        }
      </div>
      <button className='btn' onClick={() => { getPosts() }}>get post</button>
    </div>
  )
}

export default App