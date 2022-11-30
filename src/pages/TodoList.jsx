import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { deleteTodo } from '../features/todo/todoSlice'
import AddTodo from './AddTodo'

function TodoList() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    return (
        <div>
            <Header />
            <AddTodo />

            <ul class="list-group">
                <li class="list-group-item active" aria-current="true">An active item</li>
               {
                todos.length== 0 ?
                <li className='list-group-item'>No Todos......</li>
                :todos&& todos.map((todo,i)=>{
                    return (
                    <li  key={i} className="list-group-item d-flex justify-content-between" aria-current="true">
                    <p>{todo.title}</p>
                    <p>
                        <Link to={`/edit-todo/${todo.id}`}><i class="bi bi-pencil-square"></i></Link>
                        <i class="bi bi-trash" onClick={()=>handleDelete(todo.id)}></i>
                    </p>
                    </li>
                    )
                })
               }
            </ul>
        </div>

    )
}

export default TodoList