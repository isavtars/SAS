import React from 'react'
import "./AddStudents.css"

const AddStudents = () => {
  return (
    <div>

 <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
       
        <button className="addProductButton">Add Students</button>
      </form>
    </div>

    </div>
  )
}

export default AddStudents;