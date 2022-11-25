import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function EditBlog() {
    const { id } = useParams()
    const [post, setPost] = useState({})
    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => setPost(data))

    }, [id])



    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)



    const handleUpdate = (e) => {
        e.preventDefault()

        if (post.title == '') {
            alert('Please write any title')
            return
        }
        if (post.body == '') {
            alert('Please write any description')
            return
        }

        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setLoading(false)
                setMessage('The blog has been updated')
            });
    }

    return (
        <>
            <Header />

            <div>
                {
                    message ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Success!</strong> {message}
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div> : ''
                }

                <form onSubmit={(e) => handleUpdate(e)}>
                    <div className="row mb-3">
                        <label htmlfor="title" className="col-sm-2 col-form-label">Blog Title</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => setPost({ ...post, title: e.target.value })} value={post.title} type="text" name='title' className="form-control" id="title" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlfor="description" className="col-sm-2 col-form-label" >Blog Description</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => setPost({ ...post, body: e.target.value })} value={post.body} type="text" name='description' className="form-control" id="description" />
                        </div>
                    </div>



                    <button type="submit" disabled={loading ? true : false} className="btn btn-primary">{loading ? "Updating..." : 'Update Blog'}</button>
                </form>
            </div>
        </>
    )
}

export default EditBlog