import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap } from 'lucide-react';

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const projects = [
    {
      title: "Modern Warships Content",
      description: "Creating in-depth ship reviews, equipment guides, and gameplay content for the Modern Warships community.",
      tech: ["YouTube", "Content Creation", "Gaming"],
      link: "https://www.youtube.com/@atthesea04"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dhara UwU
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors ${activeSection === item ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">Dhara</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Modern Warships Content Creator & Alpha Tester
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400/10 transition-all"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code size={40} />, title: "MW Content Creator", desc: "Creating engaging ship reviews and equipment guides for Modern Warships" },
              { icon: <Palette size={40} />, title: "Alpha Tester", desc: "Testing and providing feedback on new Modern Warships features" },
              { icon: <Zap size={40} />, title: "Gaming Enthusiast", desc: "Passionate about Modern Warships and Minecraft content" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-purple-500 transition-all hover:transform hover:scale-105">
                <div className="text-purple-400 mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Modern Warships content creator and alpha tester, sharing ship reviews, equipment guides, 
              and gameplay insights with the MW community. When I'm not exploring naval warfare strategies, 
              you'll find me watching Minecraft content and enjoying creative gaming experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">My Work</h2>
          <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
            {projects.map((project, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-500 transition-all group">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50 group-hover:opacity-100 transition-opacity">🎮</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                    View Channel <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Want to collaborate or chat about Modern Warships? Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6 mb-12">
            {[
              { icon: <Github size={24} />, link: "https://github.com", label: "GitHub" },
              { icon: <Linkedin size={24} />, link: "#", label: "LinkedIn" },
              { icon: <Mail size={24} />, link: "mailto:dhara@email.com", label: "Email" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                aria-label={social.label}
                className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700 hover:border-purple-500 hover:bg-purple-500/10 transition-all transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <a
            href="mailto:SorryIHaveNoYourEmain@email.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
          >
            Send Me an Email
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-gray-400">
        <p>© 2025 Dhara. MW Content Creator & Alpha Tester.</p>
      </footer>
    </div>
  );
}