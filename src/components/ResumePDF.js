import React from 'react';

const ResumePDF = () => {
  const sectionStyle = {
    marginBottom: '10px',
    pageBreakInside: 'avoid'
  };

  const headerStyle = {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottom: '1.5px solid #000',
    paddingBottom: '2px',
    marginBottom: '4px',
    fontSize: '14px',
    color: '#000'
  };

  const itemTitleStyle = {
    fontWeight: 'bold',
    fontSize: '12px',
    color: '#000'
  };

  const contactStyle = {
    color: '#333',
    fontSize: '11px',
    marginBottom: '0px'
  };

  return (
    <div className="resume-print-wrapper bg-white" id="resume-document" style={{ 
      padding: '25px 45px', 
      color: '#333', 
      fontFamily: 'Arial, sans-serif',
      fontSize: '11px',
      lineHeight: '1.3'
    }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '12px' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase', margin: '0 0 2px 0', color: '#000' }}>
          R. KANNAN
        </h1>
        <p style={{ fontSize: '14px', fontWeight: 'bold', margin: '0 0 6px 0', color: '#333' }}>
          React Developer | Frontend Developer
        </p>
        <div style={{ borderTop: '1px solid #ccc', paddingTop: '6px' }}>
          <p style={contactStyle}>+91 63693 07080 | r.kannan0621@gmail.com | Coimbatore, Tamil Nadu</p>
          <p style={contactStyle}>linkedin.com/in/kannan-r-7618772a1 | github.com/kannan0621 | https://kannan.portfolio</p>
        </div>
      </header>

      {/* Summary */}
      <section style={sectionStyle}>
        <h5 style={headerStyle}>PROFESSIONAL SUMMARY</h5>
        <p style={{ margin: '0', textAlign: 'left' }}>
          Data-driven **React Developer** with over 1 year of professional experience in developing high-performance, scalable web applications. Expert in **React.js, Redux Toolkit, and MERN stack**, with a proven track record of reducing bundle size by **22%** and improving First Contentful Paint by **30%** across 50+ projects. Highly skilled in converting Figma designs into SEO-optimized, pixel-perfect interfaces while maintaining a **95+ performance score** in Lighthouse audits.
        </p>
      </section>

      {/* Experience */}
      <section style={sectionStyle}>
        <h5 style={headerStyle}>WORK EXPERIENCE</h5>
        
        <div style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={itemTitleStyle}>React Developer</span>
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Feb 2024 – Present</span>
          </div>
          <p style={{ color: '#000', fontWeight: 'bold', margin: '0px 0 4px 0' }}>Harvee Designs, Coimbatore</p>
          <ul style={{ margin: '0', paddingLeft: '18px' }}>
            <li>Architected and deployed **50+ modular React applications**, ensuring 100% responsiveness and serving **5,000+ monthly unique visitors**.</li>
            <li>Optimized frontend performance by **30%** through advanced memoization, lazy loading, and intelligent state management techniques.</li>
            <li>Managed over **20+ global application states** using Redux Toolkit, reducing state-management complexity and bugs by **40%**.</li>
            <li>Collaborated with design teams to translate complex Figma mockups into interactive React components with **99% accuracy**.</li>
            <li>Engineered specialized WordPress-Elementor solutions for diverse clients with a **100% project completion rate** on schedule.</li>
          </ul>
        </div>

        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={itemTitleStyle}>React & MERN Developer Trainee</span>
            <span style={{ fontSize: '12px', fontWeight: 'bold' }}>June 2023 – Nov 2023</span>
          </div>
          <p style={{ color: '#000', fontWeight: 'bold', margin: '0px 0 4px 0' }}>Smartcliff Technologies, Coimbatore</p>
          <ul style={{ margin: '0', paddingLeft: '18px' }}>
            <li>Developed the internal frontend of an Enterprise-level LMS using **React Router and Context API**, handling **1,000+ data nodes**.</li>
            <li>Reduced API request latency by **25%** by implementing efficient data-fetching patterns and optimized frontend middleware.</li>
            <li>Implemented robust JWT-based authentication and route protection middleware, securing sensitive student data for internal testing.</li>
            <li>Designed and validated NoSQL database schemas in MongoDB, facilitating a **20% improvement** in query response times.</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills - Single Column List */}
      <section style={sectionStyle}>
        <h5 style={headerStyle}>TECHNICAL SKILLS</h5>
        <p style={{ margin: '0 0 5px 0' }}>**Languages & Core:** JavaScript (ES6+), HTML5, CSS3, SASS, RESTful APIs, JSON, Webpack.</p>
        <p style={{ margin: '0 0 5px 0' }}>**React Ecosystem:** React.js, React Hooks, Redux Toolkit, Context API, Axios, Material-UI, Bootstrap 5.</p>
        <p style={{ margin: '0 0 5px 0' }}>**Backend & Databases:** Node.js, Express.js, MongoDB, MySQL, JWT Authentication, cPanel.</p>
        <p style={{ margin: '0 0 5px 0' }}>**CMS & Specialized Tools:** WordPress, Elementor, Git, GitHub, VS Code, Figma design translation.</p>
      </section>

      {/* Projects */}
      <section style={sectionStyle}>
        <h5 style={headerStyle}>PERSONNEL PROJECTS</h5>
        <div style={{ marginBottom: '4px', fontSize: '12px', fontWeight: 'bold', color: '#000' }}>
          • AI-Powered Content Portfolio
        </div>
        <div style={{ marginBottom: '4px', fontSize: '12px', fontWeight: 'bold', color: '#000' }}>
          • Real-time Inventory Management UI
        </div>
      </section>

      {/* Strengths */}
      <section style={sectionStyle}>
        <h5 style={headerStyle}>TECHNICAL STRENGTHS & INTERESTS</h5>
        <p style={{ margin: '0' }}>Expert in **Component-Driven Development**, Cross-browser compatibility, and performance profiling. Actively interested in **Modern UI/UX Trends**, Open Source contribution, and Performance Engineering. Fluent in **English (Professional)** and **Tamil (Native)**.</p>
      </section>

      {/* Education & Certs */}
      <section style={{ pageBreakInside: 'avoid' }}>
        <h5 style={headerStyle}>EDUCATION & CERTIFICATIONS</h5>
        <p style={{ margin: '0 0 4px 0' }}>**Bachelor of Engineering – Mechanical Engineering** | P. A. College of Engineering, Pollachi</p>
        <p style={{ margin: '0 0 4px 0' }}>**Diploma – Mechanical Engineering** | P. A. Polytechnic College, Pollachi</p>
        <p style={{ margin: '0' }}>**MERN Stack Development Certification** | N-School Academy, Coimbatore</p>
      </section>
    </div>
  );
};

export default ResumePDF;
