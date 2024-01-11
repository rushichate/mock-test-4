import React from 'react'

function Browse({notices,onDeleteNotice}) {

  return (
    <>
    <h1>Notices</h1>
     {notices.map(notice=>(
      <div key={notice._id}>
        <h2>{notice.author}</h2>
        <h3>{notice.title}</h3>
        <p>{notice.notice}</p>
        <p>Date:{notice.date instanceof Date ? notice.date.toLocaleString() : notice.date}</p>
        <button type='button' onClick={()=>onDeleteNotice(notice._id)}>Delete</button>
      </div>
     ))}
    </>
  )
}

export default Browse