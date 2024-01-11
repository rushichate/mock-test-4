import React,{useState} from 'react'
import axios from 'axios'


function Post({onAddNotice}) {
    
    const [newNotice, setNewNotice] = useState({author:"",title:"",notice:""})

 

    const handleChange = (e) =>{
        setNewNotice({...newNotice,[e.target.name]: e.target.value})
    }

    const handleAddNotice = () =>{
        axios.post(`http://localhost:8000/notices/`,newNotice)
        .then(res=>{
            onAddNotice(res.data)
            setNewNotice({author:"",title:"",notice:""})
            alert("Notice Added")
        })
        .catch(error=>console.error("Error posting notice:",error))
    }
  return (
    <>
     <h1>Add Notice</h1>
     <form action="">
        <label>Author Name:<input type='text' name='author' value={newNotice.author} onChange={handleChange}></input></label>
        <label>Title:<input type='text' name='title' value={newNotice.title} onChange={handleChange}></input></label>
        <label>Notice:<input type='text' name='notice' value={newNotice.notice} onChange={handleChange}></input></label>
        <button type='button' onClick={handleAddNotice}>Add Notice</button>
     </form>
    </>
  )
}

export default Post