import React from 'react'
import { useEffect,useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import {makeTitle} from '../components/Utils'
import Header from '../components/Header'

function BlogDetail() {
    const {slug,id}= useParams()
const [post,setPost]= useState({})
const [user,setUser]= useState({})

 useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((res)=>res.json())
  .then((data)=>setPost(data))
 },[id])

 useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
  .then((res)=>res.json())
  .then((data)=>setUser(data))
 },[post.userId])


  return (
    <>
    <Header />
    <div className="card">
    <div className="card-header">
      {user.username}
    </div>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
      <Link to ='/' className="btn btn-primary">Return to Home Page</Link>
    </div>
  </div></>
  )
}

export default BlogDetail