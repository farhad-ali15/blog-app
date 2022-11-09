import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { convertToSlug,truncate } from '../components/Utils'

function Home() {

  const [posts, setPosts] = useState([])
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))

  }, [])
 
  return (
    <>
    <div>
      <Header />
      <div className="main-cont">
        <div className="row">
          {
            posts.map((post,i) => {
              return (
                <div key={i} className="col-md-4 mb-4">
                 <Link to={`/blog/${convertToSlug(post.title)}`}>
                 <div className="card" style={{height:'100%'}}>
                    <div className="card-header">
                      {post.id}
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{truncate(post.title,30)}</h5>
                      <p className="card-text">{truncate(post.body,150)}</p>
                      <Link className="btn btn-primary">Go somewhere</Link>
                    </div>
                  </div>
                 </Link>
                </div>
              )
              }
          )
          }
        </div>
      </div>
      <Footer />


    </div> </>
  )
}

export default Home