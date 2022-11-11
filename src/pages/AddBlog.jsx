import React from 'react'
import Header from '../components/Header'
import{useState} from 'react'



function AddBlog() {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    
  
const handleSubmit=(e)=>{
    e.preventDefault()
    const blog={
        title:title,
        body:description,
        userId:1
    }
if (title==''){
    alert('Please write any title')
    return
}
if (description==''){
    alert('Please write any description')
    return
}


    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify(blog),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },

    })
    .then((response) => response.json())
  .then((json) => console.log(json));
}
  

return (
        <>
            <Header />
           
            <div>

                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="row mb-3">
                        <label for="title" className="col-sm-2 col-form-label">Blog Title</label>
                        <div className="col-sm-10">
                            <input onChange={(e)=>setTitle(e.target.value)} type="text" name='title' className="form-control" id="title" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="description" className="col-sm-2 col-form-label">Blog Description</label>
                        <div className="col-sm-10">
                            <input onChange={(e)=> setDescription(e.target.value)} type="text" name='description' className="form-control" id="description" />
                        </div>
                    </div>



                    <button type="submit" className="btn btn-primary">Submit Blog</button>
                </form>
            </div>
        </>
    )
}

export default AddBlog
