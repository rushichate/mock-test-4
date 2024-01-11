import React, { useState } from 'react';
import axios from 'axios';
import './Browse.css'

const ViewNotice = ({ notices, onDeleteNotice, setNotices }) => {
  const [editingNotice, setEditingNotice] = useState(null);

  const handleEditNotice = (notice) => {
    setEditingNotice(notice);
  };

  const handleCancelEdit = () => {
    setEditingNotice(null);
  };

  const handleUpdateNotice = (updatedNotice) => {
    axios.put(`https://awful-pink-baseball-cap.cyclic.app/notices/${updatedNotice._id}`, updatedNotice)
      .then(response => {
        const updatedNotices = notices.map(notice =>
          notice._id === updatedNotice._id ? response.data : notice
        );
        setEditingNotice(null);
        setNotices(updatedNotices); 
        alert("Notice Updated Successfully")
      })
      .catch(error => console.error('Error updating notice:', error));
  };

  return (
    <div>
      <h1>Notices</h1>
      <div class="container">{notices.map(notice => (
        <div class='ok' key={notice._id}>
          {editingNotice && editingNotice._id === notice._id ? (
            <div>
              <h3>Edit Notice</h3>
              <form onSubmit={(e) => { e.preventDefault(); handleUpdateNotice(editingNotice); }}>
                <label>Author Name: <input type="text" name="authorName" value={editingNotice.authorName} onChange={(e) => setEditingNotice({ ...editingNotice, authorName: e.target.value })} /></label>
                <label>Notice Title: <input type="text" name="noticeTitle" value={editingNotice.noticeTitle} onChange={(e) => setEditingNotice({ ...editingNotice, noticeTitle: e.target.value })} /></label>
                <label>Notice Description: <textarea name="noticeDescription" value={editingNotice.noticeDescription} onChange={(e) => setEditingNotice({ ...editingNotice, noticeDescription: e.target.value })} /></label>
                <button type="submit">Update Notice</button>
                <button type="button" onClick={handleCancelEdit}>Cancel</button>
              </form>
            </div>
          ) : (
            <div>
              <h2>{notice.title}</h2>
              <p>{notice.notice}</p>
              <h3>Author: {notice.author}</h3>
              <p>Date: {notice.date instanceof Date ? notice.date.toLocaleString() : notice.date}</p>
              <button type="button" onClick={() => onDeleteNotice(notice._id)}>Delete</button>
              <button type="button" onClick={() => handleEditNotice(notice)}>Edit</button>
            </div>
          )}
        </div>
      ))}</div>
      
    </div>
  );
};

export default ViewNotice;
