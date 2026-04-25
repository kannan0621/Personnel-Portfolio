import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '30px 40px',
    backgroundColor: '#FFFFFF',
    color: '#1a1a1a',
    fontSize: 10,
    fontFamily: 'Helvetica',
    lineHeight: 1.35
  },
  header: { textAlign: 'center', marginBottom: 10 },
  name: { fontSize: 24, fontFamily: 'Helvetica-Bold', marginBottom: 2, color: '#000000', textTransform: 'uppercase', letterSpacing: 1.5 },
  title: { fontSize: 12, fontFamily: 'Helvetica-Bold', color: '#333333', marginBottom: 4 },
  contact: { fontSize: 9.5, color: '#333333', marginBottom: 1 },
  divider: { borderBottomWidth: 1, borderBottomColor: '#cccccc', marginBottom: 8 },

  section: { marginBottom: 9 },
  sectionHeading: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    borderBottomWidth: 1.2,
    borderBottomColor: '#000000',
    paddingBottom: 2,
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#000000'
  },

  summaryText: { lineHeight: 1.45, textAlign: 'justify', fontSize: 10 },

  expBlock: { marginBottom: 9 },
  expRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 },
  expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, color: '#000000' },
  expDate: { fontFamily: 'Helvetica-Bold', fontSize: 10, color: '#333333' },
  expCompany: { fontFamily: 'Helvetica-Bold', fontSize: 10, color: '#444444', marginBottom: 3 },
  bulletRow: { flexDirection: 'row', marginBottom: 2 },
  bulletDot: { width: 10, fontSize: 10, color: '#000' },
  bulletText: { flex: 1, lineHeight: 1.35, fontSize: 10 },

  skillRow: { flexDirection: 'row', marginBottom: 3 },
  skillLabel: { fontFamily: 'Helvetica-Bold', fontSize: 10, width: 155 },
  skillValue: { flex: 1, fontSize: 10, lineHeight: 1.3 },

  projectTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, color: '#000000', marginBottom: 2 },
  projectDesc: { fontSize: 10, lineHeight: 1.35, marginBottom: 2 },
  projectTech: { fontSize: 9.5, color: '#444444', fontFamily: 'Helvetica-Oblique' },

  eduBlock: { marginBottom: 5 },
  eduTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, color: '#000000', marginBottom: 1 },
  eduSub: { fontSize: 10, color: '#444444' },
});

const Bullet = ({ text }) => (
  <View style={styles.bulletRow}>
    <Text style={styles.bulletDot}>{'\u2022'}</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

const ResumeDownload = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>R. KANNAN</Text>
        <Text style={styles.title}>React Developer | Frontend Developer</Text>
        <Text style={styles.contact}>+91 63693 07080  |  r.kannan0621@gmail.com  |  Coimbatore, Tamil Nadu</Text>
        <Text style={styles.contact}>linkedin.com/in/kannan-r-7618772a1  |  github.com/kannan0621  |  kannan.portfolio</Text>
      </View>
      <View style={styles.divider} />

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Summary</Text>
        <Text style={styles.summaryText}>
          Results-driven React Developer with over 1 year of professional experience building high-performance,
          scalable web applications. Proficient in React.js, Redux Toolkit, and the MERN stack, with a proven track
          record of reducing bundle size by 22% and improving First Contentful Paint by 30% across 50+ projects.
          Skilled in translating Figma designs into SEO-optimized, pixel-perfect interfaces while maintaining a 95+
          Lighthouse performance score. Strong communicator with a focus on clean code, cross-browser compatibility,
          and on-time project delivery.
        </Text>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Work Experience</Text>

        <View style={styles.expBlock}>
          <View style={styles.expRow}>
            <Text style={styles.expTitle}>React Developer</Text>
            <Text style={styles.expDate}>Feb 2024 – Present</Text>
          </View>
          <Text style={styles.expCompany}>Harvee Designs, Coimbatore</Text>
          <Bullet text="Architected and deployed 50+ modular, reusable React applications ensuring 100% responsiveness, serving 5,000+ monthly unique visitors." />
          <Bullet text="Optimized frontend performance by 30% through React memoization, lazy loading, and code splitting — measured via Lighthouse audits." />
          <Bullet text="Managed 20+ global application states using Redux Toolkit, reducing state-management complexity and related bugs by 40%." />
          <Bullet text="Integrated complex RESTful APIs using Axios, managing asynchronous data flows for real-time application updates." />
          <Bullet text="Translated high-fidelity Figma mockups into interactive React components with 99% design accuracy and full SEO optimization." />
          <Bullet text="Engineered WordPress and Elementor-based CMS solutions for diverse clients, achieving a 100% on-time project delivery rate." />
        </View>

        <View style={styles.expBlock}>
          <View style={styles.expRow}>
            <Text style={styles.expTitle}>React and MERN Developer Trainee</Text>
            <Text style={styles.expDate}>Jun 2023 – Nov 2023</Text>
          </View>
          <Text style={styles.expCompany}>Smartcliff Technologies, Coimbatore</Text>
          <Bullet text="Developed the enterprise frontend of a Learning Management System (LMS) using React.js, React Router, and Context API for 100+ internal users." />
          <Bullet text="Reduced API request latency by 25% through efficient asynchronous data-fetching patterns and optimized frontend middleware." />
          <Bullet text="Implemented JWT-based authentication and protected route middleware for secure session management across the application." />
          <Bullet text="Designed and validated MongoDB schemas, improving database query response times by 20%." />
        </View>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Technical Skills</Text>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Languages:</Text>
          <Text style={styles.skillValue}>JavaScript (ES6+), HTML5, CSS3, SASS</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Frameworks and Libraries:</Text>
          <Text style={styles.skillValue}>React.js, React Hooks, Redux Toolkit, Context API, React Router, Axios, Material-UI, Bootstrap 5, Tailwind CSS</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Backend and Databases:</Text>
          <Text style={styles.skillValue}>Node.js, Express.js, MongoDB, MySQL, RESTful APIs, JWT Authentication</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Tools and Platforms:</Text>
          <Text style={styles.skillValue}>Git, GitHub, VS Code, Figma, Webpack, cPanel, WordPress, Elementor</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Core Competencies:</Text>
          <Text style={styles.skillValue}>Component-Driven Development, Performance Profiling, Cross-Browser Compatibility, Responsive Design, Agile Collaboration</Text>
        </View>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Personal Projects</Text>

        <View style={{ marginBottom: 7 }}>
          <Text style={styles.projectTitle}>Developer Portfolio Website</Text>
          <Text style={styles.projectDesc}>
            Built a fully responsive, single-page portfolio using React.js with PDF resume generation via
            @react-pdf/renderer. Features dark/light mode toggle, smooth scrolling, and a print-optimized resume
            layout. Deployed via cPanel.
          </Text>
          <Text style={styles.projectTech}>Tech Stack: React.js, Bootstrap 5, @react-pdf/renderer, CSS3</Text>
        </View>

        <View>
          <Text style={styles.projectTitle}>Real-Time Inventory Management UI</Text>
          <Text style={styles.projectDesc}>
            Developed a React-based inventory dashboard featuring live stock tracking, role-based filtering, and
            data visualizations. Integrated RESTful APIs for real-time CRUD operations with MongoDB backend.
          </Text>
          <Text style={styles.projectTech}>Tech Stack: React.js, Redux Toolkit, Node.js, MongoDB, Axios</Text>
        </View>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Education and Certifications</Text>
        <View style={styles.eduBlock}>
          <Text style={styles.eduTitle}>Bachelor of Engineering — Mechanical Engineering</Text>
          <Text style={styles.eduSub}>P. A. College of Engineering and Technology, Pollachi</Text>
        </View>
        <View style={styles.eduBlock}>
          <Text style={styles.eduTitle}>Diploma — Mechanical Engineering</Text>
          <Text style={styles.eduSub}>P. A. Polytechnic College, Pollachi</Text>
        </View>
        <View style={styles.eduBlock}>
          <Text style={styles.eduTitle}>MERN Stack Development Certification</Text>
          <Text style={styles.eduSub}>N-School Academy, Coimbatore</Text>
        </View>
      </View>

      {/* Additional */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Additional Information</Text>
        <Text style={styles.summaryText}>
          Languages: English (Professional), Tamil (Native).
          Interests: Open source contribution, modern UI/UX trends, frontend performance engineering.
        </Text>
      </View>

    </Page>
  </Document>
);

export default ResumeDownload;
