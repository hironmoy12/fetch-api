import React, { useEffect } from 'react'
import { getAllComments } from './service/GetAllPost';

function App() {
   
  const [commentData,setCommentData] = React.useState([]);
 
  const getAllData = async() =>{
    const data = await getAllComments();
    setCommentData(data)
  }

  useEffect(()=>{
getAllData();
  },[])

  return (
   <>
   <div style={{
    display:'flex',
    alignItems:'center',
    gap:10,
    flexWrap:'wrap',
    marginTop:20
   }} >
    {commentData.map((item)=>{
        return (
            <div key={item.id} style={{
                border:'1px solid black',
                padding:10,
                width:300,
                borderRadius:10
            }} >
                <h3>{item.name}</h3>
                 <h3>{item.id}</h3>
                <p>{item.body}</p>
                <p><strong>Email:</strong> {item.email}</p>
            </div>
        )
    })
    }

   </div>
   

   
   </>
  )
}

export default App