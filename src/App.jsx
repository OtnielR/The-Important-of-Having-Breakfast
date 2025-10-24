import { HashRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/home"
import BlogDetails from "./pages/blog-details"
import ScrollToTop from "./components/extra/scroll-to-top"

function App() {

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes >
        <Route path='/' element={<Home />}></Route>
        <Route path='/blogs/:slug' element={<BlogDetails />}></Route>
      </Routes>
    </HashRouter >
  )
}

export default App
