import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Figma, ExternalLink, X, ChevronLeft, ChevronRight, Calendar, MapPin, Award, Menu, GraduationCap } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [trailPositions, setTrailPositions] = useState([
  { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }
]);

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' }
  ];

  // Track mouse movement for dynamic background effects
  useEffect(() => {
    const handleMouseMove = (e) => {
  const x = (e.clientX / window.innerWidth) * 100;
  const y = (e.clientY / window.innerHeight) * 100;
  
  setMousePosition({ x, y });
  
  // Add trailing effect
  setTimeout(() => {
    setTrailPositions(prev => [
      { x, y },
      prev[0],
      prev[1],
      prev[2]
    ]);
  }, 50);
};

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionHeight = rect.height;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }

        // Add fade-in animation
        if (rect.top <= 100 && rect.bottom >= 100) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of the navigation bar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  // Sample data - replace with your actual information
  const personalInfo = {
    name: "Aayushman Ranjan",
    title: "Web & Mobile App Developer",
    description: "I am a dedicated web and mobile app developer with a strong focus on crafting smooth, responsive, and user-friendly interfaces. I combine technical precision with creative design thinking to build applications that are both functional and visually engaging. With a deep understanding of UI/UX principles, I strive to create digital experiences that feel intuitive, accessible, and tailored to user needs.",
    socialLinks: {
      linkedin: "https://linkedin.com/in/aayushmanranjan",
      github: "https://github.com/aayushman024",
      figma: "https://www.figma.com/design/vjWil3kZIgbbUQDqpHB2qy/UI-UX-Samples?node-id=0-1&p=f&t=hn3xzfwmQhTpP0w8-0",
      resume: "https://drive.google.com/file/d/1AO9tRE1CbK_L0SGUTaSZlW4mZuO0SUPi/view?usp=sharing"
    }
  };

  const internships = [
    {
      id: 1,
      company: "Nokia Solutions and Networks",
      position: "SDE Intern",
      duration: "Jul 2024 - May 2025",
      location: "Gurugram, HR, IND",
      logo: "/src/assets/nokia.png",
      whatIDid: [
  "Built 5+ production-grade mobile/web apps using Kotlin, Flutter, and React, improving task efficiency for 500+ engineers.",
  "Led end-to-end development for Android and iOS apps, ensuring 100% responsiveness.",
  "Contributed to telecom infrastructure innovation projects, enhancing system scalability.",
  "Delivered sprint tasks ahead of schedule in 95% of Agile cycles."
],
    whatILearned: [
  "Learned scalable app architecture and clean coding practices through real-world, high-usage applications.",
  "Gained hands-on experience with Agile workflows, Jira, and sprint-based delivery in a cross-functional team.",
  "Strengthened communication and requirement-gathering skills through daily standups and stakeholder syncs.",
  "Gained domain-level knowledge of telecom networks and how software enhances field operations at scale."
    ]
    },
    {
      id: 2,
      company: "Celebal Technologies",
      position: "Summer Intern",
      duration: "May 2024 - Jul 2024",
      location: "Remote",
      logo: "/src/assets/ct.jpeg",
      whatIDid: [
  "Developed and optimized RESTful APIs and microservices using Django REST.",
  "Integrated APIs with React frontends, ensuring seamless UI interactions.",
  "Managed Git workflows across multiple projects.",
  "Collaborated with backend and frontend teams to deliver production-ready features."
],
whatILearned: [
  "Strengthened backend development skills with real-world experience in building scalable REST APIs.",
  "Learned to integrate and debug full-stack features using Postman, React, and server-side logs.",
  "Gained practical experience in handling Git version control, pull requests, and collaborative workflows.",
  "Understood end-to-end software delivery in an enterprise setting."
]
},
    {
      id: 3,
      company: "Microsoft Future Ready Talent",
      position: "Virtual Intern",
      duration: "May 2023 - Jul 2023",
      location: "Remote",
      logo: "/src/assets/microsoft.jpg",
      whatIDid: [
  "Completed the Microsoft Future Ready Talent virtual internship with a focus on cloud and AI fundamentals.",
  "Explored core concepts of Microsoft Azure, Git, GitHub, and Artificial Intelligence through guided modules.",
  "Followed structured learning paths and assessments to understand real-world applications of Azure services."
],
whatILearned: [
  "Gained theoretical knowledge of cloud computing and core Azure services including VMs, storage, and networking.",
  "Understood AI fundamentals such as machine learning models, LLMs, and responsible AI practices.",
  "Learned Git and GitHub basics including repositories, commits, branches, and collaborative workflows.",
  "Built foundational awareness of how cloud and AI integrate into modern enterprise solutions."
],
}
  ];

  const projects = [
    {
      id: 1,
      title: "GoStash",
      description: "GoStash is a productivity app that helps users organize digital resources and explore curated collections shared by others.",
      thumbnail: "src/assets/goStash/GoStash.png",
      images: ["src/assets/goStash/goStash1.png", "src/assets/goStash/goStash2.png", "src/assets/goStash/goStash3.png"],
      expandedDescription: "GoStash is a React Native based productivity app built with a Django REST backend, designed to streamline how users organize, access, and share digital resources like links, documents, and tools. Alongside personalized stash creation, it offers a unique feature: pre-made stashes curated by other users, allowing instant access to ready-to-use collections on popular topics. With intelligent search, tagging, and a clean, user-driven interface, GoStash enables up to 40% faster resource retrieval, making it a powerful tool for individuals and teams managing large volumes of content.",
      githubLink: "https://github.com/aayushman024/GoStash",
      figmaLink: "https://www.figma.com/design/KIWJ0yvtbA1dm4ip9XIZpE/GoStash?node-id=1002-6668&p=f&t=F8j6xbRlWSmP2AGA-0",
      technologies: ["React Native", "Django REST", "Firebase"]
    },
    {
      id: 2,
      title: "CareAssist",
      description: "CareAssist is a multilingual field engineer app that simplifies equipment troubleshooting with guides, videos, alarms, and interactive quizzes.",
      thumbnail: "/src/assets/careAssist/CareAssist.png",
      images: ["/src/assets/careAssist/nica1.png", "/src/assets/careAssist/nica2.png", "/src/assets/careAssist/nica3.png"],
      expandedDescription: "CareAssist is a cross-platform mobile application built using React Native, Flutter (for prototyping), Firebase, and Django REST, aimed at supporting field engineers working with telecom clients like Airtel, BSNL, and RIO. The app provides a centralized hub for troubleshooting guides, tutorial videos, and alarm resolution steps for Nokia equipment. It features multilingual support to ensure accessibility across diverse regions and includes an interactive quiz section to reinforce technical knowledge. By consolidating critical documentation and tools in one place, CareAssist reduces troubleshooting time by up to 25%, improving on-site efficiency and knowledge retention for engineers.",
      githubLink: "https://github.com/aayushman024",
      figmaLink: "https://www.figma.com/design/vjWil3kZIgbbUQDqpHB2qy/UI-UX-Samples?t=Uf18EVIOUoUwNbkB-0",
      technologies: ["React Native", "Django REST", "MySQL", "Firebase"]
    },
    {
      id: 3,
      title: "Project Management System",
      description: "The Project Management System is a web app that streamlines team progress tracking and reporting with custom dashboards and real-time updates, reducing dependecies on third-party tools.",
      thumbnail: "/api/placeholder/400/250",
      images: ["/api/placeholder/800/500", "/api/placeholder/800/500"],
      expandedDescription: "The Project Management System is a full-stack web application developed using React and Django REST Framework, designed to simplify project tracking and team management. Team members can log daily work updates linked to specific projects, while managers gain visibility through real-time dashboards that display project-wise progress, timelines, and status. The system supports custom views for both employees and admins, helping streamline reporting, task follow-ups, and accountability. With its responsive UI and seamless backend integration, it improved team reporting efficiency by 60% and reduced the overhead of manual status tracking.",
      githubLink: "https://github.com/aayushman024",
      figmaLink: "https://www.figma.com/design/vjWil3kZIgbbUQDqpHB2qy/UI-UX-Samples?t=Uf18EVIOUoUwNbkB-0",
      technologies: ["React", "Tailwind CSS", "Django REST"]
    },
    {
      id: 4,
      title: "Hot Issues Dashboard",
      description: "Hot Issues Dashboard is a mobile and web app for tracking critical issues in Nokia’s NI product lineup, with role-based UI and tailored content.",
      thumbnail: "/src/assets/hid/HID.png",
      images: ["/src/assets/hid/hid1.png", "/src/assets/hid/hid2.png", "/src/assets/hid/HID.png"],
      expandedDescription: "Hot Issues Dashboard is a real-time mobile and web application built using Flutter, React and Django REST to monitor and manage major issues across Nokia’s Network Infrastructure (NI) products. It delivers live updates on high-priority problems, enabling teams to respond quickly and effectively. The platform features user-specific dashboards and role-based content, ensuring engineers, managers, and leadership each access insights relevant to their responsibilities. By centralizing issue tracking with real-time visibility and tailored views, the dashboard enhances coordination, accountability, and resolution speed across cross-functional teams.",
      githubLink: "https://github.com/aayushman024",
      figmaLink: "https://www.figma.com/design/vjWil3kZIgbbUQDqpHB2qy/UI-UX-Samples?t=Uf18EVIOUoUwNbkB-0",
      technologies: ["Flutter", "React", "Django REST", "MySQL"],
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Dean's List - Computer Science Department",
      description: "Recognized for academic excellence for achieving highest grade point average in 6th semester."
    },
    {
      id: 2,
      title: "President - Cyber Space Club",
      description: "As President of the Cyber Space Club, I led a 120+ member core team and organized workshops, hackathons, and seminars that engaged over 2,500 students. I fostered a vibrant tech community of 400+ members, focusing on practical skills in cybersecurity, programming, and emerging technologies."
    },
  ];

  const education = [
    {
      id: 1,
      institution: "Manipal University Jaipur",
      course: "B.Tech Computer Science & Engineering",
      duration: "2021 - 2025",
      location: "Jaipur, Rajasthan",
      marks: "CGPA: 8.1/10.0",
      logo: "/src/assets/muj.png",
      description: "Specialized in software engineering, data structures, algorithms, and mobile app development."
    },
    {
      id: 2,
      institution: "Delhi Public School, Ranchi",
      course: "Senior Secondary (Class XII)",
      duration: "2019 - 2021",
      location: "Ranchi, Jharkhand",
      marks: "95.3%",
      logo: "/src/assets/dps.png",
      description: "Science stream with PCM (Physics, Chemistry, Mathematics) and Computer Science."
    },
    {
      id: 3,
      institution: "DAV Public School, Hehal, Ranchi.",
      course: "Secondary (Class X)",
      duration: "2018 - 2019",
      location: "Ranchi, Jharkhand",
      marks: "93.6%",
      logo: "/src/assets/dav.png", 
      description: "Comprehensive secondary education with focus on Science and Mathematics."
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="glass-strong border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="flex items-center hover:scale-105 transition-transform duration-300 group"
                >
                  <img 
                    src="/src/assets/logo.jpg" 
                    alt="Aayushman Ranjan Logo" 
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover border-2 border-white/20 group-hover:border-cyan-400/50 transition-all duration-300 shadow-lg"
                  />
                
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-cyan-400 bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Contact Button */}
              <div className="hidden md:block">
                <a
                  href="mailto:aayushmanranjan24@gmail.com"
                  className="px-6 py-2 glass rounded-full hover:bg-cyan-500/20 transition-all hover:scale-105 text-sm font-medium"
                >
                  Get In Touch
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 glass rounded-lg hover:bg-white/10 transition-all"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 glass-strong rounded-b-2xl border-t border-white/10">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left px-4 py-3 rounded-lg transition-all ${
                        activeSection === item.id
                          ? 'text-cyan-400 bg-white/10'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <a
                    href="mailto:aayushmanranjan24@gmail.com"
                    className="text-left px-4 py-3 text-cyan-400 hover:bg-cyan-500/20 rounded-lg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient background that responds to mouse movement */}
        {/* Main glow */}
<div 
  className="absolute inset-0 opacity-10 transition-none"
  style={{
    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
      rgba(59, 130, 246, 0.8) 0%, 
      rgba(59, 130, 246, 0.4) 5%, 
      rgba(59, 130, 246, 0.2) 10%, 
      transparent 20%)`
  }}
/>

{/* Trail layers */}
{trailPositions.map((pos, index) => (
  <div 
    key={index}
    className="absolute inset-0 transition-none"
    style={{
      opacity: 0.3 - (index * 0.07),
      background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, 
        rgba(59, 130, 246, ${0.6 - (index * 0.15)}) 0%, 
        rgba(59, 130, 246, ${0.3 - (index * 0.08)}) 8%, 
        transparent 15%)`
    }}
  />
))}
        
        {/* Animated floating orbs for depth */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
        </div>
        
        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="animate-spin-slow absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-black-500/10 to-transparent"></div>
          <div className="animate-spin-reverse-slow absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-transparent via-grey-500/10 to-transparent"></div>
        </div>
      </div>

      {/* Custom styles for animations - this creates the liquid glass effect */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse-slow {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 80s linear infinite;
        }
        
        /* Glass morphism utilities */
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .glass-strong {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Hero Section with Two-Column Layout - Added pt-20 for navbar spacing */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative z-10 pt-20">
        <div className="container mx-auto relative">
          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-2xl order- lg:order-1">
              <div className="text-left">
                <div className="mb-8">
                  <h1 className="text-2xl md:text-6xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Hi, I'm {personalInfo.name}
                  </h1>
                  <h2 className="text-[9px] md:text-2xl lg:text-xl text-gray-200 mb-6 font-light">
                    {personalInfo.title}
                  </h2>
                  <p className="text-base md:text-lg lg:text-[14px] text-gray-300 leading-relaxed mb-8">
                    {personalInfo.description}
                  </p>
                </div>
                
                {/* Enhanced Social Links with Glass Effect */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <a 
                    href={personalInfo.socialLinks.linkedin}
                    className="flex items-center px-6 py-3 glass rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:bg-blue-500/20 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} className="mr-3 group-hover:text-blue-400 transition-colors" />
                    <span className="text-sm font-medium group-hover:text-blue-400 transition-colors">LinkedIn</span>
                  </a>
                  <a 
                    href={personalInfo.socialLinks.github}
                    className="flex items-center px-6 py-3 glass rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:bg-gray-500/20 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-3 group-hover:text-white transition-colors" />
                    <span className="text-sm font-medium group-hover:text-white transition-colors">GitHub</span>
                  </a>
                  <a 
                    href={personalInfo.socialLinks.figma}
                    className="flex items-center px-6 py-3 glass rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:bg-purple-500/20 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Figma size={20} className="mr-3 group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm font-medium group-hover:text-purple-400 transition-colors">Figma</span>
                  </a>
                  <a 
                    href={personalInfo.socialLinks.resume}
                    className="flex items-center px-6 py-3 glass rounded-full transition-all hover:scale-105 hover:shadow-2xl hover:bg-green-500/20 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText size={20} className="mr-3 group-hover:text-green-400 transition-colors" />
                    <span className="text-sm font-medium group-hover:text-green-400 transition-colors">Resume</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Animated Character */}
            <div className="relative order-1 lg:order-2">
              <div className="glass-strong rounded-3xl p-8 shadow-2xl">
                {/* Animated Character Container */}
                <div className="relative w-full h-80 md:h-[280px] lg:h-[380px] flex items-center justify-center">
                  {/* Replace this with your animated character */}
                  <div className="relative h-[100%]">
                    <img 
                      src="/src/assets/me.png" 
                      alt="Aayushman Ranjan" 
                      className="w-full h-[100%] object-contain max-w-md"
                    />
                  </div>
                  
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-400/10 to-purple-400/10 rounded-2xl blur-xl"></div>
                </div>
                
                {/* Tech stack indicators */}
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {['React/React Native', 'Flutter', 'Kotlin', 'Java', 'Python'].map((tech, index) => (
                    <span 
                      key={tech}
                      className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-white/10 transition-all"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline with Glass Cards */}
      <section id="experience" className="py-20 px-4 relative z-10">
  <div className="container mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
      Experience Timeline
    </h2>
    
    <div className="relative">
      {/* Enhanced timeline line with glass effect */}
      <div className="absolute md:left-1/2 left-6 transform md:-translate-x-px -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400/50 via-blue-400/50 to-purple-400/50 backdrop-blur-sm rounded-full"></div>
      
      {internships.map((internship, index) => (
        <div key={internship.id} className={`relative flex items-center mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row flex-row' : 'md:flex-row-reverse flex-row'}`}>
          {/* Enhanced timeline dot with glow effect */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full border-4 border-slate-900 z-10 shadow-lg shadow-blue-400/50"></div>
          
          {/* Glass content cards */}
          <div className={`w-full md:w-[50%] pl-16 md:pl-10 pr-4 md:pr-10 md:text-left}`}>
            <div className="glass-strong rounded-2xl p-6 shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-105 hover:bg-white/10">
              <div className={`flex items-center mb-5} justify-start`}>
                <img 
                  src={internship.logo} 
                  alt={`${internship.company} logo`}
                  className={`w-12 h-12 rounded-full border-2 border-white/20 ${index % 2 === 0 ? 'md:mr-4 mr-4' : 'md:ml-4 mr-4'}`}
                />
                <div className="text-left">
                  <h3 className="text-xl font-bold text-cyan-400">{internship.position}</h3>
                  <p className="text-gray-200 font-semibold">{internship.company}</p>
                </div>
              </div>
              
              <div className="flex items-center text-gray-300 mb-4 mt-5 text-sm justify-start">
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">{internship.duration}</span>
                <MapPin size={16} className="mr-2" />
                <span>{internship.location}</span>
              </div>
              
              <div className="space-y-4">
                <div className="glass rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-3 text-left">What I Did:</h4>
                  {Array.isArray(internship.whatIDid) ? (
                    <ul className="text-gray-200 text-sm leading-relaxed space-y-2 text-left">
                      {internship.whatIDid.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-200 text-sm leading-relaxed text-left">{internship.whatIDid}</p>
                  )}
                </div>
                <div className="glass rounded-lg p-4">
                  <h4 className="font-semibold text-purple-400 mb-3 text-left">What I Learned:</h4>
                  {Array.isArray(internship.whatILearned) ? (
                    <ul className="text-gray-200 text-sm leading-relaxed space-y-2 text-left">
                      {internship.whatILearned.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-200 text-sm leading-relaxed text-left">{internship.whatILearned}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Enhanced Projects Section with Grid Layout */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          {/* Responsive grid layout that adapts to different screen sizes */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="glass-strong rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 cursor-pointer group relative"
                onClick={() => openProjectModal(project)}
                style={{
                  /* Staggered animation delay for entrance effect */
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Image container with enhanced hover effects */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Multi-layered overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-bold text-lg px-6 py-3 glass-strong rounded-full">View Details</span>
                  </div>
                </div>
                
                {/* Content section with glass effect */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technology tags with glass effect */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 glass rounded-full text-xs text-gray-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 glass rounded-full text-xs text-gray-400">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Subtle border glow effect */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-cyan-400/30 transition-colors duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section with Glass Cards */}
      <section id="achievements" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Achievements & Honours
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.id} 
                className="glass-strong rounded-2xl p-6 shadow-2xl hover:shadow-yellow-500/20 transition-all hover:scale-105 hover:bg-white/10"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 glass rounded-full mr-4 flex-shrink-0">
                    <Award className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-yellow-400">{achievement.title}</h3>
                    <p className="text-gray-200 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section with Glass Cards */}
      <section id="education" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Educational Background
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className="glass-strong rounded-2xl p-6 shadow-2xl hover:shadow-indigo-500/20 transition-all hover:scale-105 hover:bg-white/10"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 glass rounded-full mr-4 flex-shrink-0">
                    <GraduationCap className="text-indigo-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-indigo-400 mb-1">{edu.institution}</h3>
                    <div className="flex items-center text-gray-300 text-sm">
                      <MapPin size={14} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="glass rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">{edu.course}</h4>
                    <div className="flex items-center text-gray-300 text-sm mb-3">
                      <Calendar size={14} className="mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-200 text-sm">Academic Performance: {edu.marks}</span>
                    </div>
                    
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Project Modal with Glass Effect */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-strong rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold text-cyan-400">{selectedProject.title}</h3>
                <button 
                  onClick={closeProjectModal}
                  className="p-3 glass rounded-full hover:bg-red-500/20 transition-all hover:scale-110"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Enhanced Image Carousel */}
              <div className="relative mb-8 glass rounded-2xl overflow-hidden">
                <img 
                  src={selectedProject.images[currentImageIndex]} 
                  alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full hover:bg-white/20 transition-all hover:scale-110"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 glass rounded-full hover:bg-white/20 transition-all hover:scale-110"
                    >
                      <ChevronRight size={24} />
                    </button>
                    
                    {/* Enhanced image indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all hover:scale-125 ${
                            index === currentImageIndex 
                              ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                              : 'glass hover:bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              {/* Enhanced Project Details */}
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6">
                  <p className="text-gray-200 leading-relaxed text-lg">{selectedProject.expandedDescription}</p>
                </div>
                
                {/* Technologies with enhanced styling */}
                <div className="glass rounded-2xl p-6">
                  <h4 className="font-bold text-purple-400 mb-4 text-lg">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="px-4 py-2 glass rounded-full text-sm hover:bg-white/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Enhanced Footer with Glass Effect */}
      <footer className="py-12 text-center relative z-10">
        <div className="container mx-auto px-4">
          <div className="glass-strong rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Let's Connect
              </h3>
              
              {/* Contact action buttons */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <a 
                  href="mailto:aayushmanranjan24@gmail.com"
                  className="flex items-center px-6 py-3 glass rounded-xl hover:bg-blue-500/20 transition-all hover:scale-105 group"
                >
                  <span className="mr-2">📧</span>
                  Get In Touch
                </a>
                <a 
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 glass rounded-xl hover:bg-blue-500/20 transition-all hover:scale-105 group"
                >
                  <Linkedin size={18} className="mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            
            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-400 text-sm">
                &copy; 2024 {personalInfo.name}. Crafted with React, Tailwind CSS, and lots of ☕
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Floating Navigation Dots - Updated to work with navbar */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <nav className="glass-strong rounded-full p-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-3 h-3 rounded-full transition-all hover:scale-125 ${
                activeSection === item.id 
                  ? 'bg-cyan-400 shadow-lg shadow-cyan-400/50' 
                  : 'glass hover:bg-cyan-400/50'
              }`}
              title={item.label}
            />
          ))}
        </nav>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-8 right-8 p-4 glass-strong rounded-full hover:bg-cyan-500/20 transition-all hover:scale-110 z-40 group"
        title="Scroll to top"
      >
        <svg 
          className="w-6 h-6 group-hover:text-cyan-400 transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Portfolio;