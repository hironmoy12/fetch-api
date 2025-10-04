import axios from "axios";

  export const getAllComments = async() =>{
     
    try{
        const data = await axios.get('https://jsonplaceholder.typicode.com/comments');
          return data.data;
    
    }catch(err){
       console.log("Error here " , err);

    }


  };


  export const getAllPosts = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
};

  export const getAllAlbums = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/albums");
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
};


  export const getAllPhotos = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/photos");
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
};

 export const getAllTodos = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
};


 export const getAllUsers = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
};