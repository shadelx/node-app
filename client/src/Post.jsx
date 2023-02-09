import React from 'react'

const Post = ({post}) => {
  return (
    <div className='post'>
        <div>
            <h3>{post.user}</h3>
        </div>
        <div>
            <p>{post.body}</p>
        </div>
    </div>
  )
}

export default Post