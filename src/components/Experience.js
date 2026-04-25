import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Work } from '@mui/icons-material';

const Experience = () => {
  return (
    <section id="experience" className="py-5 alt-bg">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Professional Experience</h2>
            <div className="mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="timeline">

              <div className="timeline-item">
                <div className="p-4 bg-body border rounded shadow-sm">
                  <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                    <h4 className="fw-bold mb-0 d-flex align-items-center gap-2">
                      <Work className="text-primary" /> MERN Stack Developer
                    </h4>
                    <span className="text-muted fw-semibold">Feb 2024 – Present</span>
                  </div>
                  <h6 className="text-primary mb-3">Harvee Designs, Coimbatore</h6>
                  <ul className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                    <li><strong>Full-Stack Development:</strong> Designed and deployed 50+ full-stack web applications using React.js frontends backed by Node.js and Express.js REST APIs, serving 5,000+ monthly users.</li>
                    <li><strong>State Management:</strong> Implemented Redux Toolkit across 20+ projects, reducing state complexity and eliminating 40% of data-flow bugs in production.</li>
                    <li><strong>Backend & APIs:</strong> Built secure, scalable RESTful APIs with Express.js and JWT authentication, enabling real-time data exchange between client and server.</li>
                    <li><strong>Performance Optimization:</strong> Achieved a 30% reduction in First Contentful Paint using React lazy loading, code splitting, and memoization techniques.</li>
                    <li><strong>UI/UX Implementation:</strong> Converted Figma designs into pixel-perfect, responsive React components with 99% design fidelity across all screen sizes.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="p-4 bg-body border rounded shadow-sm">
                  <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                    <h4 className="fw-bold mb-0 d-flex align-items-center gap-2">
                      <Work className="text-primary" /> MERN Stack Developer Trainee
                    </h4>
                    <span className="text-muted fw-semibold">Jun 2023 – Nov 2023</span>
                  </div>
                  <h6 className="text-primary mb-3">Smartcliff Technologies, Coimbatore</h6>
                  <ul className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                    <li><strong>LMS Application:</strong> Built the complete frontend of an enterprise Learning Management System using React.js, React Router, and Context API for 100+ internal users.</li>
                    <li><strong>Database Design:</strong> Created and validated MongoDB schemas with Mongoose, improving database query response times by 20%.</li>
                    <li><strong>Authentication:</strong> Implemented JWT-based login and protected route middleware using Express.js, securing student data across all access levels.</li>
                    <li><strong>API Optimization:</strong> Reduced API request latency by 25% through asynchronous fetch patterns, request batching, and optimized Express middleware pipelines.</li>
                  </ul>
                </div>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
