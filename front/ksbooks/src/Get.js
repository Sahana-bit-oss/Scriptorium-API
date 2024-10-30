import React,{useEffect,useState} from "react";
// import "./App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

function Get() {
    
    const [records,setRecords] = useState([])
    const navi = useNavigate()
    
    useEffect(()=>{
        axios.get('http://localhost:6487/books/index')
        .then(res => { 
            setRecords(res.data)
        })
    },[])

    return(
        <div className="hole">
        <div className="names">
          <h1> Welcome to Scriptorium API</h1>
        </div>
        <div className="container">
            <div className="text-end"><Link to={"/Create"} className="btn btn-sm btn-primary">Add a record</Link></div>
          <table className="tables">
                <thead>
                    <tr>
                               <th>ID</th>
                                <th>Title</th>
                                <th>Author</th>
                                <th>PublishYear</th>
                                <th>Action</th>                        
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((d,i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.title}</td>
                                <td>{d.author}</td>
                                <td>{d.PublishYear}</td>
                                <td>
                                <Link to={`/Update/${d.id}`} className="btn btn-sm btn-success">Update it</Link>
                                <button onClick={e => handleSubmit(d.id)} className="btn btn-sm ms-1 btn-danger">Delete it</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
      </div>
    );    

        function handleSubmit(id){
            const conf = window.confirm("Do you want to delete the record");
            if(conf){
                axios.delete('http://localhost:6487/books/delete/'+id)
                .then(res =>{
                    alert("Record has been deleted")
                    navi('/get')
                    window.location.reload()
                }) .catch(err => console.log(err))
            }
        }



}


 export default Get;


