import Home from "./pages/Home";
import './App.css'
import { BrowserRouter, Routes, Route ,Link} from 'react-router-dom'
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <div className="container">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/blog/:slug" element={<BlogDetail />}></Route>
            
          
        </Routes>
      </BrowserRouter>
    </div>
    
    

  
  )
}

export default App;
