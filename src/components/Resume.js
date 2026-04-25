import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumeDownload from './ResumeDownload';

const Resume = () => {
  return (
    <div className="resume-page-wrapper">
      {/* Download Bar */}
      <div className="resume-download-bar no-print">
        <div className="download-bar-inner">
          <span className="download-bar-label">R. Kannan — Resume</span>
          <PDFDownloadLink
            document={<ResumeDownload />}
            fileName="R_Kannan_Resume.pdf"
            style={{ textDecoration: 'none' }}
          >
            {({ loading }) => (
              <button className="download-btn" disabled={loading}>
                {loading ? 'Preparing PDF...' : '⬇ Download PDF'}
              </button>
            )}
          </PDFDownloadLink>
        </div>
      </div>

      {/* Resume Sheet */}
      <div className="resume-sheet" id="resume-document">

        {/* Header */}
        <header className="resume-header">
          <h1 className="resume-name">R. KANNAN</h1>
          <p className="resume-title">React Developer | Frontend Developer</p>
          <div className="resume-contact-bar">
            <span>+91 63693 07080</span>
            <span className="sep">|</span>
            <span>r.kannan0621@gmail.com</span>
            <span className="sep">|</span>
            <span>Coimbatore, Tamil Nadu</span>
          </div>
          <div className="resume-contact-bar">
            <a href="https://linkedin.com/in/kannan-r-7618772a1" target="_blank" rel="noreferrer">LinkedIn</a>
            <span className="sep">|</span>
            <a href="https://github.com/kannan0621" target="_blank" rel="noreferrer">GitHub</a>
            <span className="sep">|</span>
            <span>kannan.portfolio</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="resume-section">
          <h2 className="section-heading">Professional Summary</h2>
          <p className="summary-text">
            Results-driven React Developer with over 1 year of professional experience building high-performance,
            scalable web applications. Proficient in React.js, Redux Toolkit, and the MERN stack, with a proven
            track record of reducing bundle size by 22% and improving First Contentful Paint by 30% across 50+
            projects. Skilled in translating Figma designs into SEO-optimized, pixel-perfect interfaces while
            maintaining a 95+ Lighthouse performance score. Strong communicator with a focus on clean code,
            cross-browser compatibility, and delivery within deadlines.
          </p>
        </section>

        {/* Work Experience */}
        <section className="resume-section">
          <h2 className="section-heading">Work Experience</h2>

          <div className="exp-block">
            <div className="exp-row">
              <span className="exp-title">React Developer</span>
              <span className="exp-date">Feb 2024 – Present</span>
            </div>
            <div className="exp-company">Harvee Designs, Coimbatore</div>
            <ul className="exp-bullets">
              <li>Architected and deployed 50+ modular, reusable React applications ensuring 100% responsiveness, serving 5,000+ monthly unique visitors.</li>
              <li>Optimized frontend performance by 30% through React memoization, lazy loading, and code splitting — measured via Lighthouse audits.</li>
              <li>Managed 20+ global application states using Redux Toolkit, reducing state-management complexity and related bugs by 40%.</li>
              <li>Integrated complex RESTful APIs using Axios, managing asynchronous data flows for real-time application updates.</li>
              <li>Translated high-fidelity Figma mockups into interactive React components with 99% design accuracy and full SEO optimization.</li>
              <li>Engineered WordPress and Elementor-based CMS solutions for diverse clients, achieving a 100% on-time project delivery rate.</li>
            </ul>
          </div>

          <div className="exp-block">
            <div className="exp-row">
              <span className="exp-title">React and MERN Developer Trainee</span>
              <span className="exp-date">Jun 2023 – Nov 2023</span>
            </div>
            <div className="exp-company">Smartcliff Technologies, Coimbatore</div>
            <ul className="exp-bullets">
              <li>Developed the enterprise frontend of a Learning Management System (LMS) using React.js, React Router, and Context API for 100+ internal users.</li>
              <li>Reduced API request latency by 25% through efficient asynchronous data-fetching patterns and optimized frontend middleware.</li>
              <li>Implemented JWT-based authentication and protected route middleware for secure session management across the application.</li>
              <li>Designed and validated MongoDB schemas, improving database query response times by 20%.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="resume-section">
          <h2 className="section-heading">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-row">
              <span className="skill-label">Languages:</span>
              <span className="skill-value">JavaScript (ES6+), HTML5, CSS3, SASS</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Frameworks and Libraries:</span>
              <span className="skill-value">React.js, React Hooks, Redux Toolkit, Context API, React Router, Axios, Material-UI, Bootstrap 5, Tailwind CSS</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Backend and Databases:</span>
              <span className="skill-value">Node.js, Express.js, MongoDB, MySQL, RESTful APIs, JWT Authentication</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Tools and Platforms:</span>
              <span className="skill-value">Git, GitHub, VS Code, Figma, Webpack, cPanel, WordPress, Elementor</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Core Competencies:</span>
              <span className="skill-value">Component-Driven Development, Performance Profiling, Cross-Browser Compatibility, Responsive Design, UI/UX Implementation, Agile Collaboration</span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h2 className="section-heading">Personal Projects</h2>

          <div className="exp-block">
            <div className="exp-row">
              <span className="exp-title">Developer Portfolio Website</span>
            </div>
            <p className="project-desc">
              Built a fully responsive, single-page portfolio using React.js with PDF resume generation via
              @react-pdf/renderer. Features dark/light mode toggle, smooth scrolling, and a print-optimized
              resume layout. Deployed via cPanel.
            </p>
            <p className="project-tech">Tech Stack: React.js, Bootstrap 5, @react-pdf/renderer, CSS3</p>
          </div>

          <div className="exp-block">
            <div className="exp-row">
              <span className="exp-title">Real-Time Inventory Management UI</span>
            </div>
            <p className="project-desc">
              Developed a React-based inventory management dashboard featuring live stock tracking, role-based
              filtering, and data visualizations. Integrated RESTful APIs for real-time CRUD operations.
            </p>
            <p className="project-tech">Tech Stack: React.js, Redux Toolkit, Node.js, MongoDB, Axios</p>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="resume-section">
          <h2 className="section-heading">Education and Certifications</h2>
          <div className="edu-block">
            <div className="exp-row">
              <span className="exp-title">Bachelor of Engineering — Mechanical Engineering</span>
            </div>
            <div className="exp-company">P. A. College of Engineering and Technology, Pollachi</div>
          </div>
          <div className="edu-block" style={{ marginTop: '8px' }}>
            <div className="exp-row">
              <span className="exp-title">Diploma — Mechanical Engineering</span>
            </div>
            <div className="exp-company">P. A. Polytechnic College, Pollachi</div>
          </div>
          <div className="edu-block" style={{ marginTop: '8px' }}>
            <div className="exp-row">
              <span className="exp-title">MERN Stack Development Certification</span>
            </div>
            <div className="exp-company">N-School Academy, Coimbatore</div>
          </div>
        </section>

        {/* Additional */}
        <section className="resume-section">
          <h2 className="section-heading">Additional Information</h2>
          <p className="summary-text">
            Languages: English (Professional), Tamil (Native).
            Interests: Open source contribution, modern UI/UX trends, frontend performance engineering.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Resume;
