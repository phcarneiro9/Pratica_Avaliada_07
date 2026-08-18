import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
