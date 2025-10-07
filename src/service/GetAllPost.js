import axios from "axios";
const url = import.meta.env.VITE_BASE_URL

  export const getAllComments = async() =>{
    // for react use process.env.REACT_APP_API_URL
        // for vite use import.meta.env.REACT_APP_API_URL
        console.log("My Name is ", import.meta.env.VITE_MY_NAME);
        console.log("Some Random Text ", import.meta.env.VITE_dasjdjsadsa);
     
    try{
        const data = await axios.get(`${url}comments`);
          return data.data;
    
    }catch(err){
       console.log("Error here " , err);

    }


  };


  export const getAllPosts = async () => {
  try {
    const data = await axios.get(`${url}posts`);
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
};

  export const getAllAlbums = async () => {
  try {
    const data = await axios.get(`${url}albums`);
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
};


  export const getAllPhotos = async () => {
  try {
    const data = await axios.get(`${url}photos`);
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
};

 export const getAllTodos = async () => {
  try {
    const data = await axios.get(`${url}todos`);
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
    return err
  }
};


 export const getAllUsers = async () => {
  try {
    const data = await axios.get(`${url}users`);
    return data.data; // returns posts array
  } catch (err) {
    console.log("Error fetching posts:", err);
  }
};