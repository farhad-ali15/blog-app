import React from 'react'
import { useParams } from 'react-router-dom'
import {makeTitle} from '../components/Utils'

function BlogDetail() {
    const {slug}= useParams()

 

  return (
    <div><h1>BlogDetail-{makeTitle(slug)}</h1></div>
  )
}

export default BlogDetail