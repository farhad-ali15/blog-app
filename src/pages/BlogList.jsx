
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'

import { truncate } from '../components/Utils'




function BlogList() {

  const [posts, setPosts] = useState([])
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))

  }, [])


  const handleClick = (id) => {

    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    }).then((res) => res.json())
      .then((data) => console.log(data))
  }







  return (
    <div>
      <Header />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Blog Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">

          {
            posts.map(post => {
              return (
                <tr>
                  <th scope="row">{post.id}</th>
                  <td>{truncate(post.title, 50)}</td>
                  <td>{truncate(post.body, 50)}</td>
                  <td>
                    <button onClick={() => handleClick(post.id)} className='btn me-3'><i className="bi bi-trash3"></i></button>
                    <Link to={`/edit-blog/${post.id}`}><i className="bi bi-pencil-square"></i></Link>
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

export default BlogList