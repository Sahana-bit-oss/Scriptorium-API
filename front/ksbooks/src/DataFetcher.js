import React,{useEffect,useState} from "react";
import "./App.css";
import axios from "axios";

function DataFetcher() {
    const [columns,setColumns] = useState([])
    const [records,setRecords] = useState([])
    
    useEffect(()=>{
        axios.get('http://localhost:6487/books/api/datas')
        .then(res => {
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    },[])

    return(
        <div className="container">
            <table className="tables">
                <thead>
                    <tr>
                        {columns.map((c,i) => (
                            <th key={i}>{c}</th>
                        ))}
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
                                <td>UP/DEl</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );    
}


 export default DataFetcher;