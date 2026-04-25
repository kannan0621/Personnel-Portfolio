import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '36px 44px',
    backgroundColor: '#FFFFFF',
    color: '#1a1a1a',
    fontSize: 10,
    fontFamily: 'Helvetica',
    lineHeight: 1.38
  },

  /* ── HEADER ── */
  header: { textAlign: 'center', marginBottom: 6 },
  name: {
    fontSize: 20,
    fontFamily: 'Helvetica-Bold',
    color: '#000000',
    textTransform: 'uppercase',
    marginBottom: 5
  },
  titleLine: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#333333',
    marginBottom: 5
  },
  contactLine: {
    fontSize: 9.5,
    color: '#333333',
    marginBottom: 2
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#bbbbbb',
    marginTop: 5,
    marginBottom: 8
  },

  /* ── SECTIONS ── */
  section: { marginBottom: 8 },
  sectionHeading: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    borderBottomWidth: 1.2,
    borderBottomColor: '#000000',
    paddingBottom: 2,
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#000000'
  },

  /* ── TEXT ── */
  summaryText: { lineHeight: 1.5, textAlign: 'justify', fontSize: 10 },

  /* ── EXPERIENCE ── */
  expBlock: { marginBottom: 8 },
  expRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 1 },
  expTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, color: '#000000' },
  expDate: { fontFamily: 'Helvetica-Bold', fontSize: 10, color: '#333333' },
  expCompany: { fontFamily: 'Helvetica-Bold', fontSize: 10, color: '#555555', marginBottom: 3 },

  /* ── BULLETS ── */
  bulletRow: { flexDirection: 'row', marginBottom: 2.5 },
  bulletDot: { width: 10, fontSize: 10, color: '#000' },
  bulletText: { flex: 1, lineHeight: 1.4, fontSize: 10 },

  /* ── SKILLS ── */
  skillRow: { flexDirection: 'row', marginBottom: 3 },
  skillLabel: { fontFamily: 'Helvetica-Bold', fontSize: 10, width: 155 },
  skillValue: { flex: 1, fontSize: 10, lineHeight: 1.35 },

  /* ── PROJECTS ── */
  projectBlock: { marginBottom: 7 },
  projectTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, color: '#000000', marginBottom: 2 },
  projectDesc: { fontSize: 10, lineHeight: 1.42, marginBottom: 2 },
  projectTech: { fontSize: 9.5, color: '#555555', fontFamily: 'Helvetica-Oblique' },

  /* ── EDUCATION ── */
  eduBlock: { marginBottom: 5 },
  eduTitle: { fontFamily: 'Helvetica-Bold', fontSize: 10.5, color: '#000000', marginBottom: 1 },
  eduSub: { fontSize: 10, color: '#555555' },

  /* ── LINK ── */
  linkText: { color: '#1a5fa8', fontSize: 9.5 }
});

const Bullet = ({ text }) => (
  <View style={styles.bulletRow}>
    <Text style={styles.bulletDot}>{'\u2022'}</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

const ResumeDownload = () => (
  <Document>

    {/* ===================== PAGE 1 ===================== */}
    <Page size="A4" style={styles.page}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>R. KANNAN</Text>
        <Text style={styles.titleLine}>React Developer | Front-End Developer | MERN Stack</Text>
        <Text style={styles.contactLine}>
          +91 63693 07080  |  r.kannan0621@gmail.com  |  Coimbatore, Tamil Nadu
        </Text>
      </View>
      <View style={styles.divider} />

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Professional Summary</Text>
        <Text style={styles.summaryText}>
          Results-oriented Front-End Developer and MERN Stack practitioner with over 1 year of professional
          experience delivering responsive React applications, custom WordPress websites, and full-stack
          solutions. Proficient in React.js, Redux Toolkit, Node.js, Express.js, MongoDB, and Elementor.
          Track record of reducing First Contentful Paint by 30%, eliminating 40% of state-related bugs, and
          delivering 50+ client projects with 100% on-time completion. Committed to clean code, measurable
          performance gains, and exceptional user experiences.
        </Text>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Work Experience</Text>

        {/* Harvee Designs */}
        <View style={styles.expBlock}>
          <View style={styles.expRow}>
            <Text style={styles.expTitle}>Front-End Developer</Text>
            <Text style={styles.expDate}>Feb 2024 – Present</Text>
          </View>
          <Text style={styles.expCompany}>Harvee Designs, Coimbatore</Text>
          <Bullet text="Developed 50+ responsive React applications with reusable component architecture, ensuring 100% cross-browser compatibility and mobile responsiveness for 5,000+ monthly users." />
          <Bullet text="Reduced First Contentful Paint by 30% through React lazy loading, code splitting, and memoization, validated using Lighthouse performance audits." />
          <Bullet text="Managed application state across 20+ projects using Redux Toolkit, eliminating 40% of state-related production bugs and improving developer efficiency." />
          <Bullet text="Built and customized WordPress websites using Elementor page builder, delivering tailored solutions for clients across diverse industries." />
          <Bullet text="Integrated RESTful APIs using Axios to handle asynchronous data exchange, enabling dynamic content rendering across all application modules." />
          <Bullet text="Converted Figma design mockups into high-fidelity React components with 99% design accuracy across all device breakpoints." />
        </View>

        {/* Smartcliff */}
        <View style={styles.expBlock}>
          <View style={styles.expRow}>
            <Text style={styles.expTitle}>MERN Stack Developer Trainee</Text>
            <Text style={styles.expDate}>Jun 2023 – Nov 2023</Text>
          </View>
          <Text style={styles.expCompany}>Smartcliff Technologies, Coimbatore</Text>
          <Bullet text="Developed the complete frontend of an enterprise Learning Management System using React.js, React Router, and Context API for 100+ internal users." />
          <Bullet text="Modeled and validated MongoDB database schemas using Mongoose, improving query response times by 20%." />
          <Bullet text="Built JWT-based login and protected route middleware using Express.js, securing student records across all access levels." />
          <Bullet text="Reduced API request latency by 25% through asynchronous data-fetching patterns and optimized Express middleware pipelines." />
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
          <Text style={styles.skillValue}>MongoDB, Mongoose, MySQL, Schema Design, Query Optimization</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Tools and Platforms:</Text>
          <Text style={styles.skillValue}>Git, GitHub, VS Code, Figma, Webpack, Postman, WordPress, Elementor</Text>
        </View>
      </View>

    </Page>

    {/* ===================== PAGE 2 ===================== */}
    <Page size="A4" style={styles.page}>

      {/* Personal Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Personal Projects</Text>

        <View style={styles.projectBlock}>
          <Text style={styles.projectTitle}>Developer Portfolio Website</Text>
          <Text style={styles.projectDesc}>
            Built a fully responsive, single-page portfolio using React.js with integrated PDF resume
            generation. Features include dark and light mode toggle, smooth scroll navigation, and a
            print-optimized resume layout. Deployed to production via web hosting.
          </Text>
          <Text style={styles.projectTech}>Tech Stack: React.js, Bootstrap 5, @react-pdf/renderer, CSS3</Text>
        </View>

        <View style={styles.projectBlock}>
          <Text style={styles.projectTitle}>Learning Management System (LMS)</Text>
          <Text style={styles.projectDesc}>
            Engineered a full-stack LMS application with a React.js frontend, Node.js and Express.js
            backend, and MongoDB database. Includes JWT authentication, dynamic course management,
            student dashboards, and protected routing for 100+ internal users.
          </Text>
          <Text style={styles.projectTech}>Tech Stack: React.js, Node.js, Express.js, MongoDB, JWT, React Router</Text>
        </View>
      </View>

      {/* Education and Certifications */}
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

      {/* Additional Information */}
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Additional Information</Text>
        <Text style={styles.summaryText}>
          Languages: English (Professional), Tamil (Native).{'\n'}
          Interests: Open source contribution, modern UI/UX design, and frontend performance engineering.{'\n'}
          GitHub: github.com/kannan0621
        </Text>
      </View>

    </Page>
  </Document>
);

export default ResumeDownload;
