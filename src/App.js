import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
