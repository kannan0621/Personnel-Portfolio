import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Code, Storage, Web } from '@mui/icons-material';

const About = () => {
  return (
    <section id="about" className="py-5 alt-bg">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">About Me</h2>
            <div className="mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col lg={12}>
            <p className="lead text-center mb-5 px-lg-5" style={{ lineHeight: '1.8' }}>
              MERN Stack Developer with over a year of professional experience designing and delivering full-stack
              web applications. Proficient in MongoDB, Express.js, React.js, and Node.js — with a strong track
              record of building secure REST APIs, scalable backend services, and high-performance React frontends.
              Committed to clean architecture, rapid delivery, and measurable results.
            </p>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 skill-card bg-body">
              <Card.Body>
                <div className="mb-4 text-primary">
                  <Code sx={{ fontSize: 50 }} />
                </div>
                <Card.Title className="fw-bold mb-3">Frontend Development</Card.Title>
                <Card.Text className="text-muted">
                  Building responsive, component-driven React interfaces with Redux Toolkit, hooks, and optimized rendering for production-grade UX.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 skill-card bg-body">
              <Card.Body>
                <div className="mb-4 text-primary">
                  <Storage sx={{ fontSize: 50 }} />
                </div>
                <Card.Title className="fw-bold mb-3">Backend & Database</Card.Title>
                <Card.Text className="text-muted">
                  Developing RESTful APIs using Node.js and Express.js, with MongoDB and MySQL database design, JWT authentication, and secure middleware.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 skill-card bg-body">
              <Card.Body>
                <div className="mb-4 text-primary">
                  <Web sx={{ fontSize: 50 }} />
                </div>
                <Card.Title className="fw-bold mb-3">Full-Stack Integration</Card.Title>
                <Card.Text className="text-muted">
                  Connecting frontend and backend seamlessly — REST API integration, state management, data flow design, and end-to-end deployment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
