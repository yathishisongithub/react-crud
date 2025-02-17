import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
const Home = () => {
    let [state , setState] = useState([])

    useEffect(() => {
         axios.get("http://localhost:8081/users")
         .then((res) => {
            console.log(res.data);
            setState(res.data)

         })
    } , [])

    // delete

    let delete1 = (id) => {
        axios.delete(`http://localhost:8081/users/${id}`)
        .then(() => {
            window.location.reload()
            window.alert("data is deleted")
        })
    }

  return (
    <div>
        <button> <Link to="/create">Create</Link> </button>
         <table border="5px solid">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>ROLE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((res , index) => {
                        return(
                           <tr key={index}>
                            <td>{res.name}</td>
                            <td>{res.id}</td>
                            <td>{res.role}</td>
                            <td>
                                <button onClick={() => {delete1(res.id)}}>Delete</button>
                                <button> <Link to={`/edit/${res.id}`}>Edit</Link> </button>

                            </td>
                           </tr>
                        )
                    })
                }
            </tbody>
         </table>
    </div>
  )
}

export default Home