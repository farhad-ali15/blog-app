import React from 'react'
import { useState } from 'react'
import{useDispatch,useSelector} from 'react-redux'
import {updateTodo} from '../features/todo/todoSlice'
import {useParams} from 'react-router-dom'
import Header from '../components/Header'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


function EditTodo() {

const {id} = useParams()
const todos = useSelector(state=>state.todos)
const todo = todos.find(todo=>todo.id==id)
const navigate = useNavigate()
const [todoItem,setTodoItem] = useState({
    title:todo.title,
    body:todo.body
})

   
  
    const dispatch= useDispatch()
const handleUpdate = (e)=>{
    e.preventDefault();
    const updatedTodo = {
        id,
        ...todoItem,
        createdAt : new Date().toLocaleString()
    }
    dispatch(updateTodo(updatedTodo))
    navigate('/todos')
}



  return (
    <div>
        <Header/>
          <form onSubmit={handleUpdate}>
                <div class="row mb-3">
                    <label for="title" class="col-sm-2 col-form-label">Title</label>
                    <div class="col-sm-10">
                        <input value={todoItem.title} onChange={(e)=>setTodoItem({...todoItem , title:e.target.value})} type="text" class="form-control" id="title" />
                    </div>
                </div>
                <div class="row mb-3">
                    <label for="body" class="col-sm-2 col-form-label">Body</label>
                    <div class="col-sm-10">
                        <input value={todoItem.body} onChange={(e)=>setTodoItem({...todoItem , body:e.target.value})} type="text" class="form-control" id="body" />
                    </div>
                </div>

                <button type="submit" class="btn btn-primary mb-5">Update Todo</button>
            </form>
    </div>
  )
}

export default EditTodo