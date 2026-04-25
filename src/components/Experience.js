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
                    <li><strong>React UI Development:</strong> Engineered 50+ modular, reusable React components, ensuring 100% mobile compatibility and consistent UI/UX.</li>
                    <li><strong>Frontend Performance:</strong> achieve a 30% reduction in First Contentful Paint (FCP) by implementing React lazy loading, code splitting, and memoization.</li>
                    <li><strong>State Management & APIs:</strong> Integrated RESTful APIs using Axios and managed complex application states for seamless data exchange.</li>
                    <li><strong>UI/UX Translation & CMS:</strong> Collaborated with designers to translate Figma mockups into pixel-perfect React interfaces and developed custom WordPress sites using Elementor.</li>
                    <li><strong>Quality Assurance:</strong> Conducted unit testing and cross-browser debugging to maintain high-availability production environments.</li>
                  </ul>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="p-4 bg-body border rounded shadow-sm">
                  <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap">
                    <h4 className="fw-bold mb-0 d-flex align-items-center gap-2">
                      <Work className="text-primary" /> React & MERN Developer Trainee
                    </h4>
                    <span className="text-muted fw-semibold">Jun 2023 – Nov 2023</span>
                  </div>
                  <h6 className="text-primary mb-3">Smartcliff Technologies, Coimbatore</h6>
                  <ul className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                    <li><strong>React-Based LMS:</strong> Developed the frontend of a Learning Management System (LMS) using React.js, featuring dynamic content management.</li>
                    <li><strong>Secure Auth Flow:</strong> Implemented secure user authentication and route protection using JWT and React Context API.</li>
                    <li><strong>Dynamic Routing:</strong> Utilized React Router for smooth navigation and handled complex CRUD operations via frontend-backend integration.</li>
                    <li><strong>Optimization:</strong> Optimized frontend query handling and middleware tuning for a responsive user experience.</li>
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
