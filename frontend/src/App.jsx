import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Receipe from "./pages/receipe"
import About from "./pages/about"
import Contact from "./pages/contact"
import Auth from "./pages/auth"
import Navbar from './components/navbar/navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/receipe" element={<Receipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/auth/*" element={<Auth />}/>

      </Routes>
    </>
  )
}
export default App