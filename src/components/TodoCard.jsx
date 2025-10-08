import React from 'react'

export const TodoCard = ({item}) => {
  return (
   <article key={item.id} className="todo-card">
            <h3 className="todo-title">User: {item.userId}</h3>
            <div className="todo-meta">
              Todo ID: <span className="todo-id">{item.id}</span>
            </div>
            <p className="todo-body">{item.title}</p>
            <p
              className={`todo-status ${
                item.completed ? "completed" : "pending"
              }`}
            >
              Status: {item.completed ? "✅ Completed" : "⏳ Pending"}
            </p>
          </article>
  )
}
