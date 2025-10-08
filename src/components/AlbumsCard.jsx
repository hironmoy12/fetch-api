import React from 'react'

function AlbumsCard({item}) {
  return (
     <article key={item.id} className="album-card">
            <h3 className="album-title">User: {item.userId}</h3>
            <div className="album-meta">
              Album ID: <span className="album-id">{item.id}</span>
            </div>
            <p className="album-body">{item.title}</p>
          </article>
  )
}

export default AlbumsCard
