import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkedIn, Email, Phone, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer bg-body">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold text-primary mb-0">R. Kannan</h5>
            <small className="text-muted">MERN Stack Developer</small>
          </Col>
          <Col md={4} className="text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              <a href="https://github.com/kannan0621" target="_blank" rel="noreferrer" className="text-muted text-decoration-none hover-primary">
                <GitHub />
              </a>
              <a href="https://linkedin.com/in/kannan-r-7618772a1" target="_blank" rel="noreferrer" className="text-muted text-decoration-none hover-primary">
                <LinkedIn />
              </a>
              <a href="mailto:r.kannan0621@gmail.com" className="text-muted text-decoration-none hover-primary">
                <Email />
              </a>
              <a href="tel:+916369307080" className="text-muted text-decoration-none hover-primary">
                <Phone />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <small className="text-muted">&copy; {new Date().getFullYear()} R. Kannan. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
