import axios from "axios";

  export const getAllComments = async() =>{
     
    try{
        const data = await axios.get('https://jsonplaceholder.typicode.com/comments');
          return data.data;
    
    }catch(err){
       console.log("Error here " , err);

    }


  }