import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import './Create.css'
function Create() {

  const [inputData, setInputData] = useState({
    id: '',
    title: '',
    author: '',
    PublishYear: ''
  })

  const navigat = useNavigate();

  const handelSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:6487/books/create', inputData)
      .then(res => {
        alert("The book is added into the records")
        navigat('/')
      }).catch(err => console.log(err));
  }

  

  return (
    <div className='holes'>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-gradient(25deg,,rgb(75, 107, 212),rgb(108, 207, 16))'>
        <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
          <h1>Add a new book</h1>
          <form onSubmit={handelSubmit}>
            <div className='mb-2'>
              <label htmlFor='id'>ID</label>
              <input type='text' name='id' className='form-control'
                onChange={e => setInputData({ ...inputData, id: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='title'>Title</label>
              <input type='text' name='title' className='form-control'
                onChange={e => setInputData({ ...inputData, title: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='author'>Author</label>
              <input type='text' name='author' className='form-control'
                onChange={e => setInputData({ ...inputData, author: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='PublishYear'>PublishYear</label>
              <input type='text' name='PublishYear' className='form-control'
                onChange={e => setInputData({ ...inputData, PublishYear: e.target.value })}
              />
            </div><br />
            <button className='btn btn-success'>Submit</button><br />
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
