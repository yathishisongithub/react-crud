import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
    let [name , setName ] = useState()
    let [id , setId]  = useState()
    let [role , setRole] = useState()

    let create = (e) => {
      e.preventDefault()
      let payload = {name , id , role}
      console.log(payload);
      axios.post("http://localhost:8081/users",payload)
      .then(() => {
        window.alert("data is created")
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
            <button onClick={create}>submit</button>
            <br />
            <button> <Link to="/">back to home</Link> </button>
        </form>
    </div>
  )
}

export default Create