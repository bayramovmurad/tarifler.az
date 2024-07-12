import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home"
import Recipe from "./pages/recipe"
import About from "./pages/about"
import Contact from "./pages/contact"
import Auth from "./pages/auth"
import Navbar from './components/navbar/navbar'
import CreateRecipe from './pages/createRecipe'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/recipe" element={<Recipe />} />
        <Route path="/create-recipe" element={<CreateRecipe/>} />


        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/auth/*" element={<Auth />} />

      </Routes>
    </>
  )
}
export default App