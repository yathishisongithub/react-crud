import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Edit = () => {
   let userid =  useParams()
   console.log(userid);

   let [name , setName ] = useState()
       let [id , setId]  = useState()
       let [role , setRole] = useState()

    //    read the data

    useEffect(() => {
          axios.get("http://localhost:8081/users/"+userid)
          .then((res) => {
          console.log(res.data);
        setName(res.data.name)
        setId(res.data.id)
        setRole(res.data.role)
          })
    } , [])

    // update data

    let edit = (e) =>{
        e.preventDefault()
        let payload = {name , id , role}
        console.log(payload);

       axios.put("http://localhost:8081/users/"+userid,payload)
       .then(() => {
        window.alert("data is updated")
       })
    }

  return (
    <div>
        <form action="">

          
                    name : <input type="text" name="" id="" onChange={(e) => {setName(e.target.value)}} />
                    <br />
                    id   : <input type="number" name="" id="" onChange={(e) => {setId(e.target.value)}} />
                    <br />
                    roll : <input type="text" name="" id="" onChange={(e) => {setRole(e.target.value)}} />
                    <br />
                    <button onClick={edit} >submit</button>
                    <br />
                    <button> <Link to="/">back to home</Link> </button>
                </form>
    </div>
  )
}

export default Edit