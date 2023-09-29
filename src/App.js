import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from './components/intro'
import Menu from './components/menu'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Job from './pages/job'
import Project from './pages/project'

function App() {
  return (
    <BrowserRouter>
      <section className={'main'}>
        <Intro />
        <div className={'box'}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/job' element={<Job />} />
            <Route path='/project' element={<Project />} />
          </Routes>
        </div>
        <Menu />
      </section>
    </BrowserRouter>
  )
}

export default App