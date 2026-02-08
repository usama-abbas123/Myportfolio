import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Wrench,
} from "lucide-react";

// Sample Data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart functionality, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
    github: "https://github.com/usamaabbas",
    demo: "https://demo.example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, team collaboration, and project tracking.",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Socket.io"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    github: "https://github.com/usamaabbas",
    demo: "https://demo.example.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, interactive maps, and detailed analytics.",
    techStack: ["React", "TypeScript", "Tailwind", "OpenWeather API"],
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
    github: "https://github.com/usamaabbas",
    demo: "https://demo.example.com",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for tracking social media metrics, engagement rates, and audience insights.",
    techStack: ["Vue.js", "Express", "MySQL", "Chart.js"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    github: "https://github.com/usamaabbas",
    demo: "https://demo.example.com",
  },
];

const skillsData = {
  frontend: [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux",
  ],
  backend: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "AWS", "Jest", "Webpack", "Figma"],
};

// Navbar Component
const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = ["home", "about", "projects", "contact"];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            UA
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors capitalize"
              >
                {link}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleDarkMode} className="p-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 capitalize"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Usama Abbas
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8">
          Full Stack Developer
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Passionate about building scalable web applications and creating
          seamless user experiences. Specializing in modern JavaScript
          frameworks and cloud technologies.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/usamaabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/usamaabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:usama@example.com"
            className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  const SkillCard = ({ icon: Icon, title, skills }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
      <Icon className="w-12 h-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          I'm a full stack developer with 5+ years of experience building web
          applications. I love turning complex problems into simple, beautiful
          solutions. When I'm not coding, you'll find me exploring new
          technologies or contributing to open source projects.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <SkillCard
            icon={Code2}
            title="Frontend"
            skills={skillsData.frontend}
          />
          <SkillCard
            icon={Database}
            title="Backend"
            skills={skillsData.backend}
          />
          <SkillCard icon={Wrench} title="Tools" skills={skillsData.tools} />
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const ProjectCard = ({ project }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={18} className="mr-2" /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={18} className="mr-2" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Here are some of my recent projects that showcase my skills and
          experience.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-12">
          Have a project in mind? Let's work together to bring your ideas to
          life.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            {submitted ? "Message Sent! ✓" : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/usamaabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/usamaabbas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:usama@example.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 Usama Abbas. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
