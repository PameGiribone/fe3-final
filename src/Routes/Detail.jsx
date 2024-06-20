import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Detail = () => {
  const [user, setUser] = useState([])
  const params = useParams()

  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`
  useEffect(()=>{
    axios(url)
    .then(res => setUser(res.data))
  },[])
  return (
    <>
      <h1>Detail Dentist {params.id} </h1>      
      <table>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Website</td>
        </tr>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
        </tr>
      </table>     
    </>
  )
}

export default Detail