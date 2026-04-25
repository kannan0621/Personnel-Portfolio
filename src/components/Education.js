import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { School, WorkspacePremium } from '@mui/icons-material';

const Education = () => {
  return (
    <section id="education" className="py-5">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Education & Certifications</h2>
            <div className="mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
          </Col>
        </Row>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <Card className="h-100 border-0 shadow-sm bg-body skill-card py-3">
              <Card.Body className="text-center">
                <div className="mb-3 text-primary">
                  <School sx={{ fontSize: 40 }} />
                </div>
                <Card.Title className="fw-bold fs-5 mb-2">Bachelor of Engineering</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">Mechanical Engineering</Card.Subtitle>
                <Card.Text className="text-secondary small">
                  P. A. College of Engineering and Technology, Pollachi
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6}>
            <Card className="h-100 border-0 shadow-sm bg-body skill-card py-3">
              <Card.Body className="text-center">
                <div className="mb-3 text-primary">
                  <School sx={{ fontSize: 40 }} />
                </div>
                <Card.Title className="fw-bold fs-5 mb-2">Diploma</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">Mechanical Engineering</Card.Subtitle>
                <Card.Text className="text-secondary small">
                  P. A. Polytechnic College, Pollachi
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} className="mx-auto">
            <Card className="h-100 border-0 shadow-sm bg-body skill-card py-3">
              <Card.Body className="text-center">
                <div className="mb-3 text-primary">
                  <WorkspacePremium sx={{ fontSize: 40 }} />
                </div>
                <Card.Title className="fw-bold fs-5 mb-2">Certification</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">MERN Stack</Card.Subtitle>
                <Card.Text className="text-secondary small">
                  N-School Academy, Coimbatore
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
