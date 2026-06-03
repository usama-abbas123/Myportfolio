import React, { useState, useEffect } from "react";

// ==========================================
// CONSTANT DATA DICTIONARIES (Tailored to Profile)
// ==========================================

const NAVIGATION_LINKS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

const SKILLS_DATA = [
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "ASP.NET", level: 75 },
      { name: "Laravel", level: 70 },
    ],
  },
  {
    category: "Databases & Performance",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "MSSQL", level: 85 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "Tools & Security",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT Auth", level: 85 },
      { name: "Postman", level: 85 },
    ],
  },
];

const SERVICES_DATA = [
  {
    title: "Web Development",
    description:
      "Building premium, blazing-fast, and responsive single-page web applications utilizing modern component frameworks.",
    icon: "💻",
  },
  {
    title: "Backend Development",
    description:
      "Engineering resilient server-side infrastructures using enterprise design patterns for clean and performant applications.",
    icon: "⚙️",
  },
  {
    title: "API Development",
    description:
      "Designing highly secure, optimized RESTful APIs incorporating multi-layered middleware and JWT authentication protocols.",
    icon: "🛡️",
  },
  {
    title: "Database Design",
    description:
      "Structuring efficient relational and NoSQL database schemas with complex indexing, constraints, and fast query execution.",
    icon: "🗄️",
  },
];

const PROJECTS_DATA = [
  {
    title: "Student Mini Portal",
    category: "Full-Stack",
    tech: ["React.js", "MSSQL", "Tailwind CSS", "Express.js"],
    description:
      "An academic administrative management application featuring interactive dashboards, fluid data grids for full CRUD operations, and fast responsive execution.",
    github: "https://github.com/usama-abbas123/biit-student-portal",
    demo: "#",
  },
  {
    title: "Coffee Shop Management System",
    category: "Desktop/.NET",
    tech: ["ASP.NET", "Windows Forms", "C#", "SQL Server"],
    description:
      "A heavy-duty architectural desktop application providing automated live billing structures, complex inventory state tracking, and analytical management reports.",
    github: "https://github.com",
    demo: "#",
  },
  {
    title: "Enterprise Portfolio Core",
    category: "Frontend",
    tech: ["React.js", "Tailwind CSS", "Framer Principles"],
    description:
      "A premium corporate SaaS-inspired platform built out with responsive UI elements, dark mode toggles, and unified components.",
    github: "https://github.com",
    demo: "#",
  },
];

const TIMELINE_DATA = [
  {
    type: "experience",
    role: "MERN Stack Developer (Internship)",
    company: "Cache Cloud Inc., Islamabad",
    period: "2025 (6 Months)",
    description:
      "Designed full-stack environments. Maintained secure structures by deploying robust JWT authentication, role-based access tokens, and structural database schema enhancements.",
  },
  {
    type: "education",
    role: "BS Computer Science",
    company: "PMAS Arid Agriculture University, Rawalpindi",
    period: "2022 - Present",
    description:
      "Actively completing undergraduate degree. Maintaining an excellent CGPA of 3.35, focused on Advanced Software Engineering structures and distributed web systems.",
  },
];

const TESTIMONIALS_DATA = [
  {
    quote:
      "Usama is a systematic engineer who single-handedly optimized our complex API queries. His grasp of JWT and authentication workflows ensures enterprise-grade product security.",
    author: "Senior Technical Lead",
    role: "Cache Cloud Inc.",
  },
  {
    quote:
      "Exceptional engineering discipline. He balances technical system architecture decisions with visually stunning UI implementations effortlessly.",
    author: "Academic Coordinator",
    role: "BIIT Department",
  },
];

// ==========================================
// MASTER CORE APPLICATION ORCHESTRATOR
// ==========================================

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Intercept and sync theme changes on the window element
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle visibility on scroll-to-top component
      setShowScrollTop(window.scrollY > 400);

      // Programmatically track active layout viewport intersections
      const sections = NAVIGATION_LINKS.map((link) =>
        document.getElementById(link.id),
      );
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 min-h-screen font-sans transition-colors duration-300 antialiased selection:bg-teal-500 selection:text-white">
      {/* Structural Global Background Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 dark:bg-teal-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activeSection={activeSection}
        />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <ExperienceTimeline />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      {/* Floating Scroll To Top Anchor Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 p-3 bg-teal-600 hover:bg-teal-500 text-white rounded-full shadow-xl transform transition-all duration-300 z-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to upper layout"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}

// ==========================================
// COMPONENT 1: PREMIUM STICKY NAVBAR
// ==========================================

function Navbar({ darkMode, setDarkMode, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToElement = (id) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 z-40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand Structure */}
          <div
            className="flex-shrink-0 cursor-pointer group"
            onClick={() => scrollToElement("home")}
          >
            <span className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600 dark:from-teal-400 dark:to-indigo-400">
              Usama Abbas.
            </span>
          </div>

          {/* Large Screen Full Flex Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToElement(link.id)}
                className={`text-sm font-medium transition-colors duration-200 relative py-1 focus:outline-none ${
                  activeSection === link.id
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-teal-500 rounded-full animate-pulse" />
                )}
              </button>
            ))}

            {/* Dark/Light Core Toggle Button Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200"
              aria-label="Toggle structural theme settings"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 14.05l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 111.414 1.414zm2.12-10.607a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 11a1 1 0 100-2H3a1 1 0 100 2h1z" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-indigo-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>

          {/* Micro Mobile Menu Hardware Trigger */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-400 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Structural Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2">
          {NAVIGATION_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToElement(link.id)}
              className={`block w-full text-left px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                activeSection === link.id
                  ? "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ==========================================
// COMPONENT 2: HERO INTERACTIVE SHOWCASE
// ==========================================

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Pitch Statement Copy Blocks */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
          <div className="inline-flex items-center space-x-2 bg-teal-500/10 dark:bg-teal-500/20 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide uppercase shadow-sm">
            <span>🚀 Available for Career Engagements</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] sm:leading-none">
            Hi, I am <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-indigo-600 dark:from-teal-400 dark:via-emerald-400 dark:to-indigo-400">
              Usama Abbas
            </span>
          </h1>

          <p className="text-xl font-semibold text-slate-700 dark:text-slate-300">
            MERN Stack Developer | Software Developer
          </p>

          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            I engineering high-performance structural web ecosystems.
            Specializing in designing highly performant RESTful systems, dynamic
            database management schemas, and premium responsive user interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-xl transition-all duration-200 transform hover:-translate-y-1 shadow-lg shadow-teal-500/20"
            >
              View My Work
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-200 transform hover:-translate-y-1"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Premium Profile Image Asset Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 group">
            {/* Ambient Background Glow Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-indigo-600 rounded-2xl transform rotate-3 scale-105 opacity-30 blur-lg transition-transform group-hover:rotate-6 group-hover:scale-110 duration-300" />

            <div className="absolute inset-0 bg-gradient-to-tr from-teal-600 to-indigo-600 rounded-3xl opacity-20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500" />

            {/* Main Picture Component Box */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-900">
              <img
                src="Usama.jpg"
                alt="Usama Abbas Profile Portrait"
                className="w-full h-full object-cover object-top filter grayscale-[10%] contrast-[105%] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Micro Floating Tech Card Element */}
            <div className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shadow-xl flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 tracking-tight">
                Code Node: MERN Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT 3: BIOGRAPHY AND KEY COUNTERS
// ==========================================

function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            Biography
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Systematic Developer Roadmap
          </p>
          <div className="h-1 w-12 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            <p>
              I am an execution-focused Computer Science undergraduate currently
              operating inside my terminal development cycles. I merge
              conceptual algorithms with industrial web execution, verified
              across continuous production deployments.
            </p>
            <p>
              During my intensive 6-month enterprise engineering development
              track inside{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Cache Cloud Inc.
              </span>
              , I formulated and maintained high-velocity core architectural
              pipelines, automated operational routing maps, optimized entity
              definitions, and managed comprehensive production build
              structures.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold px-6 py-3.5 rounded-xl transition-all shadow-sm"
              >
                <span>Download Professional CV / Resume</span>
                <svg
                  className="w-4 h-4 text-teal-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Graphical Key Metrics Aggregation Layer */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm text-center space-y-2">
              <p className="text-4xl font-black text-teal-600 dark:text-teal-400">
                06+
              </p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Months Corporate Intern Experience
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm text-center space-y-2">
              <p className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                3.35
              </p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Verified Cumulative CGPA
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm text-center space-y-2">
              <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                100%
              </p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                REST API Integration Security
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm text-center space-y-2">
              <p className="text-4xl font-black text-amber-600 dark:text-amber-400">
                05+
              </p>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Core System Tech Frameworks Stacked
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT 4: CATEGORIZED TECHNICAL SKILLS
// ==========================================

function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            Capabilities Matrix
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Engine Hardcoding
          </p>

          <div className="h-1 w-12 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm space-y-6 hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="w-2 h-2 rounded-full bg-teal-500" />
              </h3>

              <div className="space-y-4">
                {cat.items.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span className="text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 text-xs">
                        {skill.level}% Proficiency
                      </span>
                    </div>
                    {/* Performance Progress Indicator Bar */}
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT 5: ARCHITECTURAL SERVICES CARDS
// ==========================================

function Services() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            Solutions Portfolio
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Services Offered
          </p>
          <div className="h-1 w-12 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm hover:shadow-xl hover:border-teal-500/30 dark:hover:border-teal-400/30 transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {srv.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {srv.description}
                </p>
              </div>
              <div className="pt-4 flex items-center text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-300">
                <span>Deploy Engine &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT 6: FILTERABLE PROJECT GRID
// ==========================================

function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full-Stack", "Desktop/.NET", "Frontend"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            Case Studies
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Production & Desktop Engineering
          </p>

          <div className="h-1 w-12 bg-teal-500 mx-auto rounded-full" />
        </div>

        {/* Dynamic Categorized Filter Controls Row */}
        <div className="flex flex-wrap justify-center items-center gap-2 max-w-xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-semibold tracking-wide rounded-full border transition-all duration-200 focus:outline-none ${
                filter === cat
                  ? "bg-slate-900 border-slate-900 text-white dark:bg-teal-600 dark:border-teal-600"
                  : "bg-white border-slate-200 text-slate-600 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Systems Rendering Module */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200/60 dark:border-slate-800/60 shadow-sm flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed min-h-[72px]">
                  {project.description}
                </p>

                {/* Technology Tech Pills Wrapper */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Source Actions Links Row */}
              <div className="p-6 pt-0 bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 flex items-center space-x-1"
                >
                  <span>Source Code</span>
                  <span>📁</span>
                </a>
                <a
                  href={project.demo}
                  className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 flex items-center space-x-1"
                >
                  <span>Live Sandbox</span>
                  <span>⚡</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT 7: TIMELINE LAYOUT
// ==========================================

function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            Chronology
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & Academic Path
          </p>

          <div className="h-1 w-12 bg-teal-500 mx-auto rounded-full" />
        </div>

        {/* Structural Linear Vertical Pipeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-6 space-y-12">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-8 group">
              {/* Timeline Center Node Pin */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 transition-colors duration-300 ${
                  item.type === "experience"
                    ? "bg-teal-500 group-hover:bg-teal-400"
                    : "bg-indigo-500 group-hover:bg-indigo-400"
                }`}
              />

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm space-y-3 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.role}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-full w-max">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                  {item.company}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT 8: TESTIMONIAL FEEDBACK
// ==========================================

function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            Endorsements
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Peer & Leadership Feedback
          </p>
          <div className="h-1 w-12 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 shadow-sm flex flex-col justify-between relative group"
            >
              <span className="absolute top-4 right-6 text-6xl text-slate-200 dark:text-slate-800/40 font-serif select-none pointer-events-none">
                “
              </span>
              <p className="text-base text-slate-600 dark:text-slate-400 italic leading-relaxed relative z-10 z-index-1">
                "{t.quote}"
              </p>
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs uppercase">
                  {t.author.substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT 9: CONTACT & LEAD ACQUISITION
// ==========================================

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleDispatch = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            Communication
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Initiate A Project System
          </p>
          <div className="h-1 w-12 bg-teal-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Channel Communications Stack Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Direct Terminal Communication
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Have a full-stack project requiring planning or structured
              execution? Send an asynchronous ping directly.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Direct Access Mail
                  </p>
                  <a
                    href="mailto:usammaabbass@gmail.com"
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-teal-500 transition-colors"
                  >
                    usammaabbass@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Mobile Telecom Link
                  </p>
                  <a
                    href="tel:+923030011036"
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-teal-500 transition-colors"
                  >
                    +92 303 0011036
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Operational Location Hub
                  </p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Native React Form Module */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Transmission Completed Successfully
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Data package parsed and sent. I will follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDispatch} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                      Identity Label
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="Your Name"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                      Return Target Mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                    Data Package Message Payload
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    placeholder="Provide architecture project specifications..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:text-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-slate-900 hover:bg-slate-800 dark:bg-teal-600 dark:hover:bg-teal-500 text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>Dispatch Network Query</span>
                  <span>🚀</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// COMPONENT 10: BRAND SIGNATURE FOOTER
// ==========================================

function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-1">
          <p className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
            Usama Abbas
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Premium Architecture Engineering Core &copy; 2026. All rights
            preserved.
          </p>
        </div>

        {/* Core Link Aggregation Matrix */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://github.com/usama-abbas123"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors"
          >
            GitHub Link
          </a>
          <a
            href="#"
            className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors"
          >
            LinkedIn Profile
          </a>

          <a
            href="mailto:usammaabbass@gmail.com"
            className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-teal-500 transition-colors"
          >
            Email Terminal
          </a>
        </div>
      </div>
    </footer>
  );
}
