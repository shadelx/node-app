import React from 'react'
import Post from './Post'

import "./App.css"

const post1 = {
  "user":"Alex",
  "body":"this is the firs post"
}

function App() {
  return (
    <div className='container app'>
      <h1>hello there</h1>
      <Post post ={post1}/>
    </div>
  )
}

export default App