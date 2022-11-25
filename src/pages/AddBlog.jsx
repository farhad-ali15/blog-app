import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'



function AddBlog() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {
            title: title,
            body: description,
            userId: 1
        }
        if (title == '') {
            alert('Please write any title')
            return
        }
        if (description == '') {
            alert('Please write any description')
            return
        }

        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },

        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setLoading(false)
                setMessage('The blog has been submitted')
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

                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="row mb-3">
                        <label htmlfor="title" className="col-sm-2 col-form-label">Blog Title</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => setTitle(e.target.value)} type="text" name='title' className="form-control" id="title" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlfor="description" className="col-sm-2 col-form-label">Blog Description</label>
                        <div className="col-sm-10">
                            <input onChange={(e) => setDescription(e.target.value)} type="text" name='description' className="form-control" id="description" />
                        </div>
                    </div>



                    <button type="submit" disabled={loading ? true:false} className="btn btn-primary">{loading? "Saving...":'Save Blog'}</button>
                </form>
            </div>
        </>
    )
}

export default AddBlog
