import React from 'react'
import { useState } from 'react'
import{useDispatch} from 'react-redux'
import {createTodo} from '../features/todo/todoSlice'

function AddTodo() {
    const [todo,setTodo] = useState({
        title:'',
        body:''
    })
    const dispatch= useDispatch()
const handleSubmit = (e)=>{
    e.preventDefault();
    const newTodo={
        id:Date.now(),
        ...todo,
        createdAt: new Date().toLocaleString
    }

    dispatch(createTodo(newTodo))
}



  return (
    <div>
          <form onSubmit={handleSubmit}>
                <div class="row mb-3">
                    <label for="title" class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-10">
                        <input onChange={(e)=>setTodo({...todo,title:e.target.value})} type="text" class="form-control" id="title" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="body" class="col-sm-2 col-form-label">Body</label>
                    <div class="col-sm-10">
                        <input onChange={(e)=>setTodo({...todo,body:e.target.value})} type="text" class="form-control" id="body" />
                    </div>
                </div>

                <button type="submit" class="btn btn-primary mb-5">Add Todo</button>
            </form>
    </div>
  )
}

export default AddTodo