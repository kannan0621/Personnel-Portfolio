import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { Code, Web, Storage, Build, SupportAgent } from '@mui/icons-material';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code />,
      skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3']
    },
    {
      title: 'Frontend & React',
      icon: <Web />,
      skills: ['React.js (Hooks, Context, Router)', 'Redux', 'Bootstrap', 'HTML5 / CSS3']
    },
    {
      title: 'Backend',
      icon: <Storage />,
      skills: ['Node.js', 'Express.js', 'RESTful APIs']
    },
    {
      title: 'Databases',
      icon: <Storage />,
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools & DevOps',
      icon: <Build />,
      skills: ['Git', 'GitHub', 'VS Code', 'cPanel', 'Figma', 'JWT Authentication']
    },
    {
      title: 'Core Competencies',
      icon: <SupportAgent />,
      skills: ['Component-Driven Development', 'Frontend Development', 'Performance Profiling', 'Cross-Browser Compatibility', 'UI/UX Implementation']
    }
  ];

  return (
    <section id="skills" className="py-5">
      <Container className="py-5">
        <Row className="mb-5 text-center">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Technical Skills</h2>
            <div className="mx-auto bg-primary mb-4" style={{ height: '4px', width: '60px', borderRadius: '2px' }}></div>
          </Col>
        </Row>
        <Row className="gy-4">
          {skillCategories.map((category, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="p-4 border rounded shadow-sm bg-body h-100 skill-card">
                <div className="d-flex align-items-center mb-3 text-primary">
                  {category.icon}
                  <h4 className="fw-bold mb-0 ms-2">{category.title}</h4>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge bg="secondary" className="fw-normal py-2 px-3 text-white" key={i}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
