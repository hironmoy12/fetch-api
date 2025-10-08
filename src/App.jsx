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
import PostCard from "./components/PostCard";
import CommentCard from "./components/CommentCard";
import { TodoCard } from "./components/TodoCard";
import UserCard from "./components/UserCard";
import PhotosCard from "./components/PhotosCard";
import AlbumsCard from "./components/AlbumsCard";



// To-do List: date : - 6th oct 2025
// 1. Write custom object (use 5 categories )
// 2. Create a styles card for products...
// 3. create a page for products, where all products will be displayed in a card style.
// 4. create a filter section,on the top of all profuct listing, it should filter based on triger..
// 5. create a state for price,
// 6. increase and decrease price based on the button click.


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
    console.log("user data", data);
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
        {posts.map((item,index) => (
         <PostCard key={index} item={item} />
        ))}
      </div>

      {/* ---------- COMMENTS SECTION ---------- */}
      <h1>Comments</h1>
      <div className="comments-container">
        {comments.map((item,index) => (
           <CommentCard key={index} item={item} />
        ))}
      </div>

      {/* ---------- ALBUMS SECTION ---------- */}
      <h1>Albums</h1>
      <div className="albums-container">
        {albums.map((item, index) => (
         <AlbumsCard key={index} item={item} /> 
        ))}
      </div>

      {/* ---------- photos SECTION ---------- */}
      <h1>Photos</h1>
      <div className="photos-container">
        {photos.map((item) => (
         <PhotosCard key={item.id} item={item} />
        ))}
      </div>

      {/* ---------- TODOS SECTION ---------- */}
      <h1>Todos</h1>
      <div className="todos-container">
        {todos.map((item, index) => (
          <TodoCard key={index} item={item} />
        ))}
      </div>

        {/* ---------- USERS SECTION ---------- */}
    <h1>Users</h1>
<div className="users-table-container">
  
      {users.map((item, index) => (
       <UserCard key={index} item={item} />
      ))}
   
</div>

















    </>
  );
}

export default App;
