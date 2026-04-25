import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Phone, Email, LinkedIn, LocationOn, GitHub } from '@mui/icons-material';

const Contact = () => {
  return (
    <section id="contact" className="py-5 alt-bg">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
            <div className="mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
            <p className="lead text-muted">Let's discuss how my skills can bring value to your team.</p>
          </Col>
        </Row>
        <Row className="justify-content-center gy-4">
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 bg-body skill-card">
              <Card.Body>
                <div className="text-primary mb-3">
                  <Phone sx={{ fontSize: 40 }} />
                </div>
                <Card.Title className="fw-bold">Phone</Card.Title>
                <Card.Text>
                  <a href="tel:+916369307080" className="text-decoration-none text-muted">+91 63693 07080</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 bg-body skill-card">
              <Card.Body>
                <div className="text-primary mb-3">
                  <Email sx={{ fontSize: 40 }} />
                </div>
                <Card.Title className="fw-bold">Email</Card.Title>
                <Card.Text>
                  <a href="mailto:r.kannan0621@gmail.com" className="text-decoration-none text-muted" style={{ wordBreak: 'break-all' }}>
                    r.kannan0621@gmail.com
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 bg-body skill-card">
              <Card.Body>
                <div className="text-primary mb-3">
                  <GitHub sx={{ fontSize: 40 }} />
                </div>
                <Card.Title className="fw-bold">GitHub</Card.Title>
                <Card.Text>
                  <a href="https://github.com/kannan0621" target="_blank" rel="noreferrer" className="text-decoration-none text-muted" style={{ wordBreak: 'break-all' }}>
                    github.com/kannan0621
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 bg-body skill-card">
              <Card.Body>
                <div className="text-primary mb-3">
                  <LinkedIn sx={{ fontSize: 40 }} />
                </div>
                <Card.Title className="fw-bold">LinkedIn</Card.Title>
                <Card.Text>
                  <a href="https://linkedin.com/in/kannan-r-7618772a1" target="_blank" rel="noreferrer" className="text-decoration-none text-muted" style={{ wordBreak: 'break-all' }}>
                    View Profile
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 bg-body skill-card">
              <Card.Body>
                <div className="text-primary mb-3">
                  <LocationOn sx={{ fontSize: 40 }} />
                </div>
                <Card.Title className="fw-bold">Location</Card.Title>
                <Card.Text className="text-muted">
                  Coimbatore, Tamil Nadu
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
