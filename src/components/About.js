import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Person, Speed, Code } from '@mui/icons-material';

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
              Dynamic React Developer with over a year of professional experience specializing in building highly interactive, 
              high-performance web applications. Proven track record of delivering 50+ responsive, state-driven interfaces, 
              achieving a 30% reduction in page load speeds through advanced React performance techniques.
            </p>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 skill-card bg-body">
              <Card.Body>
                <div className="mb-4 text-primary">
                  <Code sx={{ fontSize: 50 }} />
                </div>
                <Card.Title className="fw-bold mb-3">React Development</Card.Title>
                <Card.Text className="text-muted">
                  Expert in component design patterns, hooks, and complex state management, ensuring scalable frontend development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 skill-card bg-body">
              <Card.Body>
                <div className="mb-4 text-primary">
                  <Speed sx={{ fontSize: 50 }} />
                </div>
                <Card.Title className="fw-bold mb-3">Performance Engineering</Card.Title>
                <Card.Text className="text-muted">
                  Optimizing React applications via code splitting, memoization, and efficient rendering strategies for lightning-fast UX.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 border-0 shadow-sm text-center p-4 skill-card bg-body">
              <Card.Body>
                <div className="mb-4 text-primary">
                  <Person sx={{ fontSize: 50 }} />
                </div>
                <Card.Title className="fw-bold mb-3">UI/UX Implementation</Card.Title>
                <Card.Text className="text-muted">
                  Translating design system mockups into interactive, pixel-perfect React components with seamless animations.
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
