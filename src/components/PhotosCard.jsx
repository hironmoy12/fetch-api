import React from 'react'

function PhotosCard({item}) {
  return (
     <article key={item.id} className="photos-card">
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="photos-thumbnail"
                />
                <h3 className="photos-title">User: {item.albumId}</h3>
                <div className="photos-meta">
                  Album ID: <span className="photos-id">{item.id}</span>
                </div>
                <p className="photos-body">{item.title}</p>
              </article>
  )
}

export default PhotosCard
