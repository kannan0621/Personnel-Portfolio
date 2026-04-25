import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '32px 42px',
    backgroundColor: '#FFFFFF',
    color: '#1a1a1a',
    fontSize: 10,
    fontFamily: 'Helvetica',
    lineHeight: 1.35
  },
  header: { textAlign: 'center', marginBottom: 8 },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 2,
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 1.5
  },
  title: { fontSize: 11.5, fontFamily: 'Helvetica-Bold', color: '#333333', marginBottom: 4 },
  contact: { fontSize: 9.5, color: '#333333', marginBottom: 1 },
  divider: { borderBottomWidth: 1, borderBottomColor: '#aaaaaa', marginBottom: 8, marginTop: 4 },

  section: { marginBottom: 8 },
  sectionHeading: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    borderBottomWidth: 1.2,
    borderBottomColor: '#000000',
    paddingBottom: 2,
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#000000'
  },

  summaryText: { lineHeight: 1.5, textAlign: 'justify', fontSize: 10 },

  expBlock: { marginBottom: 8 },
  expRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 },
  expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, color: '#000000' },
  expDate: { fontFamily: 'Helvetica-Bold', fontSize: 10, color: '#333333' },
  expCompany: { fontFamily: 'Helvetica-Bold', fontSize: 10, color: '#555555', marginBottom: 3 },

  bulletRow: { flexDirection: 'row', marginBottom: 2 },
  bulletDot: { width: 10, fontSize: 10, color: '#000' },
  bulletText: { flex: 1, lineHeight: 1.38, fontSize: 10 },

  skillRow: { flexDirection: 'row', marginBottom: 3 },
  skillLabel: { fontFamily: 'Helvetica-Bold', fontSize: 10, width: 160 },
  skillValue: { flex: 1, fontSize: 10, lineHeight: 1.3 },

  projectBlock: { marginBottom: 6 },
  projectTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, color: '#000000', marginBottom: 2 },
  projectDesc: { fontSize: 10, lineHeight: 1.4, marginBottom: 2 },
  projectTech: { fontSize: 9.5, color: '#555555', fontFamily: 'Helvetica-Oblique' },

  eduBlock: { marginBottom: 5 },
  eduTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, color: '#000000', marginBottom: 1 },
  eduSub: { fontSize: 10, color: '#555555' },
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
        <Text style={styles.title}>MERN Stack Developer | Full Stack Web Developer</Text>
        <Text style={styles.contact}>+91 63693 07080  |  r.kannan0621@gmail.com  |  Coimbatore, Tamil Nadu</Text>
      </View>
      <View style={styles.divider} />

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Summary</Text>
        <Text style={styles.summaryText}>
          Dedicated MERN Stack Developer with over 1 year of professional experience building full-stack web
          applications using MongoDB, Express.js, React.js, and Node.js. Proven record of delivering secure REST
          APIs, scalable backend services, and high-performance React frontends — reducing bundle size by 22% and
          improving First Contentful Paint by 30% across 50+ projects. Adept at JWT authentication, database
          schema design, Redux Toolkit state management, and translating Figma designs into production-ready
          interfaces. Committed to clean code, on-time delivery, and measurable business impact.
        </Text>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Work Experience</Text>

        <View style={styles.expBlock}>
          <View style={styles.expRow}>
            <Text style={styles.expTitle}>MERN Stack Developer</Text>
            <Text style={styles.expDate}>Feb 2024 – Present</Text>
          </View>
          <Text style={styles.expCompany}>Harvee Designs, Coimbatore</Text>
          <Bullet text="Designed and deployed 50+ full-stack web applications using React.js frontends and Node.js/Express.js REST APIs, serving 5,000+ monthly active users." />
          <Bullet text="Reduced First Contentful Paint by 30% through React lazy loading, code splitting, and memoization — validated via Lighthouse performance audits." />
          <Bullet text="Streamlined global state management across 20+ projects using Redux Toolkit, eliminating 40% of state-related production bugs." />
          <Bullet text="Developed secure RESTful APIs with JWT authentication and Express.js middleware, enabling reliable client-server data exchange and protected routes." />
          <Bullet text="Collaborated with UI/UX designers to translate Figma prototypes into responsive, pixel-perfect React components across all device breakpoints." />
          <Bullet text="Delivered WordPress and Elementor CMS solutions for clients with a 100% on-time project completion rate." />
        </View>

        <View style={styles.expBlock}>
          <View style={styles.expRow}>
            <Text style={styles.expTitle}>MERN Stack Developer Trainee</Text>
            <Text style={styles.expDate}>Jun 2023 – Nov 2023</Text>
          </View>
          <Text style={styles.expCompany}>Smartcliff Technologies, Coimbatore</Text>
          <Bullet text="Developed the complete frontend of an enterprise Learning Management System (LMS) using React.js, React Router, and Context API for 100+ internal users." />
          <Bullet text="Designed and validated MongoDB schemas with Mongoose ODM, improving database query performance by 20%." />
          <Bullet text="Built JWT-based authentication and route protection middleware with Express.js, securing sensitive student records across all user roles." />
          <Bullet text="Cut API request latency by 25% through asynchronous fetch patterns, request batching, and optimized Express middleware pipelines." />
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
          <Text style={styles.skillLabel}>Frontend:</Text>
          <Text style={styles.skillValue}>React.js, React Hooks, Redux Toolkit, Context API, React Router, Axios, Material-UI, Bootstrap 5, Tailwind CSS</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Backend:</Text>
          <Text style={styles.skillValue}>Node.js, Express.js, REST API Design, JWT Authentication, Middleware, MVC Architecture</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Databases:</Text>
          <Text style={styles.skillValue}>MongoDB, Mongoose ODM, MySQL, Database Schema Design, Query Optimization</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Tools and Platforms:</Text>
          <Text style={styles.skillValue}>Git, GitHub, VS Code, Figma, Webpack, Postman, cPanel, WordPress</Text>
        </View>
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Personal Projects</Text>

        <View style={styles.projectBlock}>
          <Text style={styles.projectTitle}>Developer Portfolio Website</Text>
          <Text style={styles.projectDesc}>
            Built a single-page portfolio with React.js featuring PDF resume generation, dark/light mode toggle,
            smooth scroll navigation, and responsive layout. Deployed to production via cPanel hosting.
          </Text>
          <Text style={styles.projectTech}>Tech Stack: React.js, Bootstrap 5, @react-pdf/renderer, CSS3</Text>
        </View>

        <View style={styles.projectBlock}>
          <Text style={styles.projectTitle}>Learning Management System (LMS)</Text>
          <Text style={styles.projectDesc}>
            Engineered a full-stack LMS with React.js frontend, Node.js/Express.js backend, and MongoDB database.
            Includes user authentication, dynamic course management, student dashboards, and protected routing for
            100+ internal users at Smartcliff Technologies.
          </Text>
          <Text style={styles.projectTech}>Tech Stack: React.js, Node.js, Express.js, MongoDB, JWT, React Router</Text>
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
          Languages: English (Professional), Tamil (Native). Open to full-time and contract MERN Stack
          Developer roles. Interests include open source contribution and modern UI/UX engineering.
        </Text>
      </View>

    </Page>
  </Document>
);

export default ResumeDownload;
