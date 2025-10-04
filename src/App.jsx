import React, { useEffect, useState } from "react";
import {
  getAllComments,
  getAllPosts,
  getAllAlbums,
  getAllPhotos,
  getAllTodos,
  getAllUsers,
} from "./service/GetAllPost";
import "./App.css";

function App() {
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  const getAllData = async () => {
    const data = await getAllComments();
    setComments(data);
  };
  const getpost = async () => {
    const data = await getAllPosts();
    setPosts(data);
  };
  const getAlbums = async () => {
    const data = await getAllAlbums();
    setAlbums(data);
  };

  const getPhotos = async () => {
    const data = await getAllPhotos();
    setPhotos(data);
  };

  const getTodos = async () => {
    const data = await getAllTodos();
    setTodos(data);
  };

  const getUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  useEffect(() => {
    getAllData();
    getpost();
    getAlbums();
    getPhotos();
    getTodos();
    getUsers();
  }, []);

  return (
    <>
      {/* ---------- POSTS SECTION ---------- */}
      <h1>Posts</h1>
      <div className="posts-container">
        {posts.map((item) => (
          <article key={item.id} className="post-card">
            <h3 className="post-title">{item.title}</h3>
            <div className="post-meta">
              ID: <span className="post-id">{item.id}</span>
            </div>
            <p className="post-body">{item.body}</p>
          </article>
        ))}
      </div>

      {/* ---------- COMMENTS SECTION ---------- */}
      <h1>Comments</h1>
      <div className="comments-container">
        {comments.map((item) => (
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
        ))}
      </div>

      {/* ---------- ALBUMS SECTION ---------- */}
      <h1>Albums</h1>
      <div className="albums-container">
        {albums.map((item) => (
          <article key={item.id} className="album-card">
            <h3 className="album-title">User: {item.userId}</h3>
            <div className="album-meta">
              Album ID: <span className="album-id">{item.id}</span>
            </div>
            <p className="album-body">{item.title}</p>
          </article>
        ))}
      </div>

      {/* ---------- photos SECTION ---------- */}
      <h1>Photos</h1>
      <div className="photos-container">
        {photos.map((item) => (
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
        ))}
      </div>

      {/* ---------- TODOS SECTION ---------- */}
      <h1>Todos</h1>
      <div className="todos-container">
        {todos.map((item) => (
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
        ))}
      </div>

        {/* ---------- USERS SECTION ---------- */}
    <h1>Users</h1>
<div className="users-table-container">
  <table className="users-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Address</th>
        <th>Company</th>
      </tr>
    </thead>
    <tbody>
      {users.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.username}</td>
          <td>
            <a href={`mailto:${item.email}`}>{item.email}</a>
          </td>
          <td>{item.phone}</td>
          <td>
            <a href={`http://${item.website}`} target="_blank" rel="noreferrer">
              {item.website}
            </a>
          </td>
          <td>
            {item.address.suite}, {item.address.street}, {item.address.city} - {item.address.zipcode}
          </td>
          <td>
            {item.company.name}
            <br />
            <em>"{item.company.catchPhrase}"</em>
            <br />
            {item.company.bs}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
















    </>
  );
}

export default App;
