import React,{useEffect,useState} from 'react';
import './App.css';
import Post from './componentes/Post.jsx';
import Browse from './componentes/Browse.jsx';
import axios from 'axios';

function App() {
  const [notices, setNotices] = useState([])

     useEffect(()=>{
     axios.get(`http://localhost:8000/notices/`)
     .then(res=> setNotices(res.data))
     .catch(error=>console.error('Error fetching notices:',error))
    },[])

    const handleAddNotice = (newNotice)=>{
      setNotices([...notices,newNotice])
    }

    const handleDelete = (id)=>{
      axios.delete(`http://localhost:8000/notices/${id}`)
      .then(()=>{setNotices(notices.filter(notice=>notice._id!==id))
       alert("Notice Deleted") })
      .catch(error=>console.error('Error deleting notice:',error))
    }
  return (
    <>
    <h1>Notice App</h1>
    <Post onAddNotice={handleAddNotice}/>
    <Browse notices={notices} onDeleteNotice={handleDelete}/>
    </>
  );
}

export default App;
