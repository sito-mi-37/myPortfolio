import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Skills from './pages/Skills'

function App() {

  return (
    <div className="App">
       <Layout>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>
        </Router>

      </Layout>
    </div>
  )
}

export default App
