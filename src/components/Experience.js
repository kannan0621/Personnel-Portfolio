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
                      <Work className="text-primary" /> Front-End Developer
                    </h4>
                    <span className="text-muted fw-semibold">Feb 2024 – Present</span>
                  </div>
                  <h6 className="text-primary mb-3">Harvee Designs, Coimbatore</h6>
                  <ul className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                    <li><strong>React Development:</strong> Developed 50+ responsive, component-driven React applications with 100% cross-browser compatibility, serving 5,000+ monthly users.</li>
                    <li><strong>Performance Optimization:</strong> Reduced First Contentful Paint by 30% through React lazy loading, code splitting, and memoization techniques.</li>
                    <li><strong>State Management:</strong> Managed application state across 20+ projects using Redux Toolkit, eliminating 40% of state-related production bugs.</li>
                    <li><strong>WordPress & Elementor:</strong> Built and customized WordPress websites using Elementor page builder, delivering tailored web solutions for clients across diverse industries.</li>
                    <li><strong>API Integration:</strong> Integrated RESTful APIs using Axios for asynchronous data exchange and dynamic content rendering.</li>
                    <li><strong>UI/UX Implementation:</strong> Converted Figma mockups into high-fidelity React components with 99% design accuracy across all device breakpoints.</li>
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
                    <li><strong>LMS Application:</strong> Developed the complete frontend of an enterprise Learning Management System (LMS) using React.js, React Router, and Context API for 100+ internal users.</li>
                    <li><strong>Database Design:</strong> Modeled and validated MongoDB schemas using Mongoose, improving query response times by 20%.</li>
                    <li><strong>Authentication:</strong> Built JWT-based login and protected routes using Express.js, securing student records across all user role levels.</li>
                    <li><strong>API Optimization:</strong> Reduced API request latency by 25% through asynchronous data-fetching and optimized Express middleware pipelines.</li>
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
