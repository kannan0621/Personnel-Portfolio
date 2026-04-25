import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Download, Email, GitHub } from '@mui/icons-material';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumeDownload from './ResumeDownload';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center">
            <h5 className="text-primary fw-bold mb-3 text-uppercase" style={{ letterSpacing: '2px' }}>
              Hello, I'm
            </h5>
            <h1 className="display-2 fw-bold mb-4">
              R. Kannan
            </h1>
            <h2 className="h3 text-secondary mb-4">
              MERN Stack Developer <span className="text-muted mx-2">|</span> Full Stack Web Developer
            </h2>
            <p className="lead mb-5 px-lg-5 text-muted">
              I build end-to-end web applications using MongoDB, Express.js, React.js, and Node.js.
              Over a year of professional experience delivering scalable, high-performance full-stack solutions.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Button variant="primary" size="lg" className="px-4 py-2 rounded-pill d-flex align-items-center gap-2" href="mailto:r.kannan0621@gmail.com">
                <Email /> Contact Me
              </Button>
              <Button variant="outline-primary" size="lg" className="px-4 py-2 rounded-pill d-flex align-items-center gap-2" href="https://github.com/kannan0621" target="_blank">
                <GitHub /> GitHub
              </Button>
              <PDFDownloadLink document={<ResumeDownload />} fileName="R_Kannan_MERN_Developer_Resume.pdf" style={{ textDecoration: 'none' }}>
                {({ loading }) => (
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    className="px-4 py-2 rounded-pill d-flex align-items-center gap-2"
                    disabled={loading}
                  >
                    <Download /> {loading ? 'Preparing...' : 'Download Resume'}
                  </Button>
                )}
              </PDFDownloadLink>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
