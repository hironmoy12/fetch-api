import React from 'react'

function CommentCard({item}) {
  return (
              <article key={item.id} className="comment-card">
            <h3 className="comment-title">{item.name}</h3>
            <div className="comment-meta">
              ID: <span className="comment-id">{item.id}</span>
            </div>
            <p className="comment-body">{item.body}</p>
            <p className="comment-email">
              <strong>Email:</strong>{" "}
              <a href={`mailto:${item.email}`}>{item.email}</a>
            </p>
          </article>
  )
}

export default CommentCard