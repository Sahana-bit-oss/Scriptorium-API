import axios from 'axios';
import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const initialinfo ={
  id :'',
  title:'',
  author:'',
  PublishYear:''
}

function Update()  {
  const params = useParams();

  const [data,setData] = useState(initialinfo)
  useEffect(()=>{
    axios.get('http://localhost:6487/books/index')
    .then(res =>{
      setData(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

    function handlesubmit(event) {
      event.preventDefault();
      axios.put('http://localhost:6487/books/update/'+params.id,data)
      .then(res =>{
        alert("data updated successfully")
      })
      .catch(err=>{
        console.log(err);
      })
    }



  return (
    <div>
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update book</h1>
        <form onSubmit={handlesubmit}>
        <div className='mb-2'>
            <label htmlFor='id'>ID</label>
            <input type='text' disabled  defaultValue={params.id}  name='id' className='form-control'
            
            />
        </div>
        <div className='mb-2'>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title' defaultValue={data.title} className='form-control'
            onChange={e => setData({...data, title: e.target.value})}
            />
        </div>
        <div className='mb-2'>
            <label htmlFor='author'>Author</label>
            <input type='text' name='author' defaultValue={data.author} className='form-control'
            onChange={e => setData({...data, author: e.target.value})}
            />
        </div>
        <div className='mb-3'>
            <label htmlFor='PublishYear'>PublishYear</label>
            <input type='text' name='PublishYear' defaultValue={data.PublishYear} className='form-control'
            onChange={e => setData({...data, PublishYear: e.target.value})}
            />
        </div><br/>
        <button className='btn btn-success'>Update</button><br/>
        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Update
