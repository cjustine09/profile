import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Contact from './component/Contact';
import SubmissionSuccess from './component/SubmissionSuccess';

const App = () => {
  return (
    <Router>
      {/* Navbar for Navigation */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">My Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Links to different routes */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/submission-success" element={<SubmissionSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;
