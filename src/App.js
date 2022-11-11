import Home from "./pages/Home";
import './App.css'
import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom'
import BlogDetail from "./pages/BlogDetail";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <div className="container">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add-blog" element={<AddBlog />}></Route>

          <Route path="/blog/:slug/:id" element={<BlogDetail />}></Route>
            
          
        </Routes>
      </BrowserRouter>
    </div>
    
    

  
  )
}

export default App;
