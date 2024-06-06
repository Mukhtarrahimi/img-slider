import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'


function App() {
  return (
    <div className="App font-poppins">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
