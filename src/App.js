import Home from "./pages/Home";
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BlogDetail from "./pages/BlogDetail";
import AddBlog from "./pages/AddBlog";
import BlogList from "./pages/BlogList";
import EditBlog from "./pages/EditBlog";
import RegisterUser from "./pages/RegisterUser";
import { Counter } from "./pages/Counter";
import TodoList from "./pages/TodoList";
import EditTodo from "./pages/EditTodo";



function App() {
  return (
    <div className="container">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-blog" element={<AddBlog />}></Route>

          <Route path="/blog/:slug/:id" element={<BlogDetail />}></Route>
          <Route path="/admin" element={<BlogList />}></Route>
          <Route path="/edit-blog/:id" element={<EditBlog />}></Route>
          <Route path="/register" element={<RegisterUser />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/todos" element={<TodoList />}></Route>
          <Route path="/edit-todo/:id" element={<EditTodo />}></Route>
          
            
          
        </Routes>
      </BrowserRouter>
    </div>
    
    

  
  )
}

export default App;
