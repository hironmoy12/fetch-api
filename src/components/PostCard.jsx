import React from 'react'

function PostCard({item}) {
  return (
              <article key={item.id} className="post-card">
            <h3 className="post-title">{item.title}</h3>
            <div className="post-meta">
              ID: <span className="post-id">{item.id}</span>
            </div>
            <p className="post-body">{item.body}</p>
          </article>
  )
}

export default PostCard