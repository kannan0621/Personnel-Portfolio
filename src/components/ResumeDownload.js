import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

/* ─────────────────────────────────────────────────────────────
   DESIGN TOKENS
   ───────────────────────────────────────────────────────────── */
const NAV   = '#0f2044';   // dark navy  — header bg, section headings
const ACC   = '#1d6de5';   // royal blue — accent line, links, company
const LIGHT = '#f0f4ff';   // very light blue — header tint
const BODY  = '#222222';   // body text
const MUTED = '#555555';   // secondary text

const styles = StyleSheet.create({

  /* PAGE */
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: BODY,
    backgroundColor: '#ffffff',
    padding: 0,
    lineHeight: 1.38
  },

  /* ── HEADER BLOCK ── */
  headerBlock: {
    backgroundColor: NAV,
    paddingTop: 28,
    paddingBottom: 20,
    paddingHorizontal: 44,
  },
  name: {
    fontSize: 26,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 5
  },
  titleLine: {
    fontSize: 11.5,
    color: '#b8d0ff',
    marginBottom: 10,
    fontFamily: 'Helvetica-Bold'
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0
  },
  contactItem: {
    fontSize: 9.5,
    color: '#d4e4ff',
    marginRight: 14
  },

  /* Blue accent rule below header */
  accentBar: {
    height: 4,
    backgroundColor: ACC
  },

  /* ── PAGE BODY padding ── */
  body: {
    paddingHorizontal: 44,
    paddingTop: 16,
    paddingBottom: 28
  },

  /* ── SECTION ── */
  section: { marginBottom: 10 },

  sectionHeading: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: NAV,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 4,
    paddingBottom: 3,
    borderBottomWidth: 2,
    borderBottomColor: ACC
  },

  /* ── SUMMARY ── */
  summaryText: {
    fontSize: 10,
    lineHeight: 1.55,
    color: BODY,
    textAlign: 'justify'
  },

  /* ── EXPERIENCE ── */
  expBlock: { marginBottom: 10 },

  expHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1
  },
  expTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: BODY
  },
  expDate: {
    fontSize: 9.5,
    color: MUTED,
    fontFamily: 'Helvetica-Bold'
  },
  expCompany: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: ACC,
    marginBottom: 4
  },

  /* ── BULLETS ── */
  bulletRow: { flexDirection: 'row', marginBottom: 2.5, paddingLeft: 2 },
  bulletDot:  { width: 10, color: ACC, fontSize: 10 },
  bulletText: { flex: 1, fontSize: 10, lineHeight: 1.42, color: BODY },

  /* ── SKILLS — two-column grid ── */
  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  skillRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 3
  },
  skillLabel: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: NAV,
    width: 155
  },
  skillValue: {
    flex: 1,
    fontSize: 10,
    color: BODY,
    lineHeight: 1.35
  },

  /* ── PROJECTS ── */
  projectBlock: { marginBottom: 8 },
  projectTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: BODY,
    marginBottom: 2
  },
  projectDesc: {
    fontSize: 10,
    lineHeight: 1.45,
    color: BODY,
    marginBottom: 2
  },
  projectTech: {
    fontSize: 9.5,
    color: ACC,
    fontFamily: 'Helvetica-Oblique'
  },

  /* ── EDUCATION ── */
  eduBlock: { marginBottom: 6 },
  eduTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: BODY,
    marginBottom: 1
  },
  eduSub: { fontSize: 10, color: MUTED },

  /* ── ADDITIONAL ── */
  additionalText: {
    fontSize: 10,
    color: BODY,
    lineHeight: 1.5
  }
});

/* ─────────────────────────────────────────────────────────────
   BULLET HELPER
   ───────────────────────────────────────────────────────────── */
const B = ({ text }) => (
  <View style={styles.bulletRow}>
    <Text style={styles.bulletDot}>›</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

/* ─────────────────────────────────────────────────────────────
   SECTION HEADING HELPER
   ───────────────────────────────────────────────────────────── */
const SH = ({ children }) => (
  <Text style={styles.sectionHeading}>{children}</Text>
);

/* ─────────────────────────────────────────────────────────────
   DOCUMENT
   ───────────────────────────────────────────────────────────── */
const ResumeDownload = () => (
  <Document>

    {/* ══════════════ PAGE 1 ══════════════ */}
    <Page size="A4" style={styles.page}>

      {/* Header */}
      <View style={styles.headerBlock}>
        <Text style={styles.name}>R. KANNAN</Text>
        <Text style={styles.titleLine}>React Developer  |  Front-End Developer  |  MERN Stack</Text>
        <View style={styles.contactRow}>
          <Text style={styles.contactItem}>+91 63693 07080</Text>
          <Text style={styles.contactItem}>r.kannan0621@gmail.com</Text>
          <Text style={styles.contactItem}>Coimbatore, Tamil Nadu</Text>
          <Text style={styles.contactItem}>linkedin.com/in/kannan-r-7618772a1</Text>
          <Text style={styles.contactItem}>github.com/kannan0621</Text>
        </View>
      </View>
      <View style={styles.accentBar} />

      {/* Body */}
      <View style={styles.body}>

        {/* Summary */}
        <View style={styles.section}>
          <SH>Summary</SH>
          <Text style={styles.summaryText}>
            Results-oriented Front-End Developer and MERN Stack practitioner with over 1 year of professional
            experience delivering responsive React applications, custom WordPress websites, and full-stack
            solutions. Proficient in React.js, Redux Toolkit, Node.js, Express.js, and MongoDB. Track record
            of reducing First Contentful Paint by 30%, eliminating 40% of state-related bugs, and delivering
            50+ client projects with 100% on-time completion. Dedicated to clean code, measurable performance
            gains, and exceptional user experiences.
          </Text>
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <SH>Work Experience</SH>

          {/* Harvee */}
          <View style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>Front-End Developer</Text>
              <Text style={styles.expDate}>Feb 2024 – Present</Text>
            </View>
            <Text style={styles.expCompany}>Harvee Designs — Coimbatore, Tamil Nadu</Text>
            <B text="Developed 50+ responsive React applications with reusable component architecture, ensuring 100% cross-browser compatibility and mobile responsiveness for 5,000+ monthly users." />
            <B text="Reduced First Contentful Paint by 30% through lazy loading, code splitting, and memoization techniques, validated by Lighthouse audits." />
            <B text="Maintained Redux Toolkit state across 20+ projects, eliminating 40% of state-related production bugs and improving developer efficiency." />
            <B text="Built and customized WordPress websites using Elementor page builder, delivering tailored solutions for clients across multiple industries." />
            <B text="Integrated RESTful APIs using Axios for asynchronous data exchange and dynamic content rendering across application modules." />
            <B text="Converted Figma design mockups into high-fidelity React components with 99% accuracy across all device breakpoints." />
          </View>

          {/* Smartcliff */}
          <View style={styles.expBlock}>
            <View style={styles.expHeader}>
              <Text style={styles.expTitle}>MERN Stack Developer Trainee</Text>
              <Text style={styles.expDate}>Jun 2023 – Nov 2023</Text>
            </View>
            <Text style={styles.expCompany}>Smartcliff Technologies — Coimbatore, Tamil Nadu</Text>
            <B text="Developed the complete frontend of an enterprise Learning Management System (LMS) using React.js, React Router, and Context API for 100+ internal users." />
            <B text="Modeled and validated MongoDB database schemas using Mongoose, improving query response times by 20%." />
            <B text="Built JWT-based login and protected route middleware using Express.js, securing student records across all user access levels." />
            <B text="Reduced API request latency by 25% through asynchronous data-fetching patterns and optimized Express middleware pipelines." />
          </View>
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <SH>Skills</SH>
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
            <Text style={styles.skillLabel}>Tools:</Text>
            <Text style={styles.skillValue}>Git, GitHub, VS Code, Figma, Webpack, Postman, WordPress, Elementor</Text>
          </View>
        </View>

      </View>
    </Page>

    {/* ══════════════ PAGE 2 ══════════════ */}
    <Page size="A4" style={styles.page}>
      <View style={styles.accentBar} />
      <View style={styles.body}>

        {/* Projects */}
        <View style={styles.section}>
          <SH>Projects</SH>

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
              Engineered a full-stack LMS with React.js frontend, Node.js and Express.js backend, and
              MongoDB database. Includes JWT authentication, dynamic course management, student dashboards,
              and protected routing for 100+ users.
            </Text>
            <Text style={styles.projectTech}>Tech Stack: React.js, Node.js, Express.js, MongoDB, JWT, React Router</Text>
          </View>
        </View>

        {/* Education */}
        <View style={styles.section}>
          <SH>Education</SH>
          <View style={styles.eduBlock}>
            <Text style={styles.eduTitle}>Bachelor of Engineering — Mechanical Engineering</Text>
            <Text style={styles.eduSub}>P. A. College of Engineering and Technology, Pollachi</Text>
          </View>
          <View style={styles.eduBlock}>
            <Text style={styles.eduTitle}>Diploma — Mechanical Engineering</Text>
            <Text style={styles.eduSub}>P. A. Polytechnic College, Pollachi</Text>
          </View>
        </View>

        {/* Certifications — separate section for ATS recognition */}
        <View style={styles.section}>
          <SH>Certifications</SH>
          <View style={styles.eduBlock}>
            <Text style={styles.eduTitle}>MERN Stack Development Certification</Text>
            <Text style={styles.eduSub}>N-School Academy, Coimbatore</Text>
          </View>
        </View>

        {/* Additional */}
        <View style={styles.section}>
          <SH>Additional Information</SH>
          <Text style={styles.additionalText}>
            Languages: English (Professional), Tamil (Native).{'\n'}
            Interests: Open source contribution, frontend performance engineering, and modern UI/UX design.{'\n'}
            GitHub Profile: github.com/kannan0621
          </Text>
        </View>

      </View>
    </Page>

  </Document>
);

export default ResumeDownload;
