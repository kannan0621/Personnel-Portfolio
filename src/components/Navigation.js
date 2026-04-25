import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { LightMode, DarkMode, GitHub } from '@mui/icons-material';

const Navigation = ({ isDarkMode, toggleTheme }) => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      const navbarScaler = document.querySelector('.navbar-collapse');
      if (navbarScaler && navbarScaler.classList.contains('show')) {
        navbarScaler.classList.remove('show');
      }
    }
  };

  return (
    <Navbar expand="lg" fixed="top" className="glass-nav py-3">
      <Container>
        <Navbar.Brand 
          href="/" 
          onClick={(e) => scrollToSection(e, 'home')} 
          className="fw-bold fs-4 text-primary"
          style={{ cursor: 'pointer' }}
        >
          RK.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link onClick={(e) => scrollToSection(e, 'about')} className="mx-2 fw-semibold">About</Nav.Link>
            <Nav.Link onClick={(e) => scrollToSection(e, 'skills')} className="mx-2 fw-semibold">Skills</Nav.Link>
            <Nav.Link onClick={(e) => scrollToSection(e, 'experience')} className="mx-2 fw-semibold">Experience</Nav.Link>
            <Nav.Link onClick={(e) => scrollToSection(e, 'education')} className="mx-2 fw-semibold">Education</Nav.Link>
            <Nav.Link onClick={(e) => scrollToSection(e, 'contact')} className="mx-2 fw-semibold mx-lg-3">Contact</Nav.Link>
            <div className="d-flex align-items-center gap-3">
              <a href="https://github.com/kannan0621" target="_blank" rel="noreferrer" className="text-muted hover-primary">
                <GitHub />
              </a>
              <Button 
                variant={isDarkMode ? 'outline-light' : 'outline-dark'} 
                className="rounded-circle p-2 d-flex align-items-center justify-content-center"
                onClick={toggleTheme}
                style={{ width: '40px', height: '40px' }}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <LightMode fontSize="small" /> : <DarkMode fontSize="small" />}
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
