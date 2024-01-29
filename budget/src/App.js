import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'

import NewProject from './components/pages/NewProject'
import Company from './components/pages/Company'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Container from './components/layout/Container'

function App() {

  return (


    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">contact</Link>
        <Link to="/Company">Company</Link>
        <Link to="/newproject">NewProject</Link>

      </div>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>

  );
}

export default App;
