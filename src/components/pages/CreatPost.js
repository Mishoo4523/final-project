import React from 'react'

function CreatPost() {
  return (
    <div className="card">

      <input type="text" placeholder="post title"/>
      <input type="text" placeholder="post content"/>

      <div className="file-field input-field">
      <div className ="btn">
        <span>File</span>
        <input type="file" / >
      </div>
      <div classame="file-path-wrapper">
        <input className="file-path validate" type="text" / >
      </div>
    </div>




    </div>
  )
}

export default CreatPost