import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [showFlipCards, setShowFlipCards] = useState(false);
  const [flipped, setFlipped] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Titanic Survival Prediction',
      description: 'Built a classification model predicting passenger survival with 82% accuracy using logistic regression and random forests.',
      tags: ['Python', 'Scikit-learn', 'EDA', 'Classification'],
      metrics: '82% Accuracy',
      color: 'from-blue-500 to-cyan-500',
      image: '📊',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=500&fit=crop'
    },
    {
      title: 'House Price Forecasting',
      description: 'Developed a regression model predicting house prices with RMSE of $25K using advanced feature engineering and gradient boosting.',
      tags: ['XGBoost', 'Regression', 'Feature Engineering'],
      metrics: '$25K RMSE',
      color: 'from-purple-500 to-pink-500',
      image: '🏠',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=500&fit=crop'
    },
    {
      title: 'Sentiment Analysis NLP',
      description: 'Created an NLP pipeline analyzing 50K+ tweets with 88% sentiment classification accuracy using word embeddings and transformers.',
      tags: ['NLP', 'BERT', 'Text Mining', 'Deep Learning'],
      metrics: '88% Accuracy',
      color: 'from-orange-500 to-red-500',
      image: '💬',
      imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=500&h=500&fit=crop'
    },
    {
      title: 'Customer Clustering',
      description: 'Segmented 10K customers into 5 distinct clusters using K-means, enabling targeted marketing strategies.',
      tags: ['Clustering', 'Unsupervised Learning', 'Business Analytics'],
      metrics: '5 Segments',
      color: 'from-green-500 to-emerald-500',
      image: '👥',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop'
    }
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'SQL', 'R', 'JavaScript'] },
    { category: 'ML/DL', items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'XGBoost'] },
    { category: 'Data Tools', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'] },
    { category: 'NLP & CV', items: ['NLTK', 'Transformers', 'OpenCV', 'BERT'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-8 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity duration-300">BSP</a>
          
          <div className="hidden md:flex gap-8">
            <button onClick={() => { window.location.hash = 'home'; window.scrollTo(0, 0); }} className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 cursor-pointer">Home</button>
            <button onClick={() => { window.location.hash = 'allprojects'; document.getElementById('allprojects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 cursor-pointer">All Projects</button>
            <button onClick={() => { window.location.hash = 'projects'; document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 cursor-pointer">Projects</button>
            <button onClick={() => { window.location.hash = 'skills'; document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 cursor-pointer">Skills</button>
            <button onClick={() => { window.location.hash = 'contact'; document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="text-sm font-medium hover:text-blue-400 transition-colors duration-300 cursor-pointer">Contact</button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 border-t border-slate-700">
            {['Home', 'All Projects', 'Projects', 'Skills', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '')}`} className="block px-6 py-3 text-sm hover:bg-slate-700/50 cursor-pointer" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className="mb-8 animate-bounce" style={{ animationDelay: '0.2s' }}>
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30 text-sm font-semibold">Welcome to my portfolio</div>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="px-6 py-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full border-2 border-green-400/60 flex items-center gap-2 hover:border-green-400 transition-all duration-300 transform hover:scale-110">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-300 font-semibold">Available for Freelancing</span>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-40 h-40 md:w-56 md:h-56 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-75 animate-spin" style={{ animationDuration: '8s' }}></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQE1EShSsNxusQ/profile-displayphoto-crop_800_800/B56Zn77AsKIYAI-/0/1760868175321?e=1762387200&v=beta&t=jpfMxesu5_GXH4azYVNH_urfzyT8u26zDCV0JEAOAwE"
                alt="Bhuvana Sai Puchakayala"
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-slate-900 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">Bhuvana Sai Puchakayala</span>
          </h1>

          <div className="mb-6 text-2xl md:text-3xl font-semibold">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Data Scientist Intern</span> @ 
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent ml-2">TechnoColabs</span>
          </div>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">Building intelligent systems that transform raw data into actionable insights. End-to-end ML projects across multiple domains.</p>
          
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button onClick={() => setShowFlipCards(!showFlipCards)} className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">View My Work</button>
            <button className="px-8 py-3 border border-slate-400 rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 active:scale-95">Get In Touch</button>
          </div>

          <div className="flex justify-center gap-6 mt-16">
            <div className="hover:scale-125 transition-transform duration-300 cursor-pointer transform hover:rotate-12">
              <Github size={28} className="hover:text-blue-400 transition-colors" />
            </div>
            <div className="hover:scale-125 transition-transform duration-300 cursor-pointer transform hover:rotate-12">
              <Linkedin size={28} className="hover:text-blue-400 transition-colors" />
            </div>
            <div className="hover:scale-125 transition-transform duration-300 cursor-pointer transform hover:rotate-12">
              <Mail size={28} className="hover:text-blue-400 transition-colors" />
            </div>
          </div>

          <div className="mt-20 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-slate-400" />
          </div>
        </div>
      </section>

      {/* 3D Flip Cards Modal */}
      {showFlipCards && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex items-center justify-center p-6 overflow-y-auto">
          <div className="w-full max-w-7xl py-12">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold">My Project Collection</h2>
              <button 
                onClick={() => setShowFlipCards(false)}
                className="text-3xl hover:text-red-400 transition-colors duration-300 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="h-80 cursor-pointer perspective"
                  onClick={() => setFlipped({ ...flipped, [idx]: !flipped[idx] })}
                >
                  <div
                    className="relative w-full h-full transition-transform duration-700 transform-gpu"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: flipped[idx] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                    }}
                  >
                    {/* Front of Card */}
                    <div
                      className={`absolute w-full h-full bg-gradient-to-br ${project.color} rounded-2xl p-8 flex flex-col items-center justify-center border-2 border-white/20 shadow-2xl`}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className="text-8xl mb-4 animate-bounce">{project.image}</div>
                      <h3 className="text-2xl font-bold text-center text-white drop-shadow-lg">{project.title}</h3>
                      <p className="text-sm text-white/80 mt-4 text-center">Click to see details</p>
                    </div>

                    {/* Back of Card */}
                    <div
                      className="absolute w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 flex flex-col justify-between border-2 border-white/20 shadow-2xl overflow-y-auto"
                      style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    >
                      <div>
                        <div className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-sm font-semibold mb-4`}>
                          {project.metrics}
                        </div>
                        <p className="text-slate-200 text-sm leading-relaxed mb-6">{project.description}</p>
                        
                        <div className="mb-6">
                          <p className="text-xs font-semibold text-slate-400 mb-2">TECHNOLOGIES</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="px-2 py-1 bg-slate-700/80 text-xs rounded text-slate-100">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-semibold transition-colors duration-300 text-white">
                          Code
                        </button>
                        <button className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm font-semibold transition-colors duration-300 text-white">
                          Details
                        </button>
                      </div>

                      <p className="text-xs text-slate-400 text-center mt-4">Click to flip back</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-400 text-sm">Click any card to flip and see project details</p>
            </div>
          </div>
        </div>
      )}

      {/* All Projects Section */}
      <section id="allprojects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-500">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 mb-8 hover:border-green-400/60 transition-colors duration-300 cursor-pointer transform hover:rotate-1">
              <span className="text-xl font-bold animate-bounce" style={{ animationDelay: '0s' }}>📁 My Projects Folder</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 hover:text-blue-400 transition-colors duration-300">All My Data Science Projects</h2>
            <p className="text-slate-300 text-2xl font-semibold mb-2">
              Total Projects Completed: <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">{projects.length}+</span>
            </p>
            <p className="text-slate-400 mb-12">Explore my complete collection of end-to-end data science projects</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          <p className="text-center text-slate-400 mb-16">Showcasing my best work across different domains</p>

          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className={`md:col-span-2 bg-gradient-to-br ${project.color} flex items-center justify-center p-8 relative overflow-hidden group-hover:skew-y-1 transition-all duration-500 transform group-hover:scale-110 origin-left`}>
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="relative z-10 text-6xl md:text-8xl opacity-30 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 transform group-hover:rotate-6 animate-bounce">{project.image}</div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-8 relative z-10 flex flex-col justify-between bg-gradient-to-r from-transparent via-slate-800/30 to-slate-800/60 group-hover:via-slate-800/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-500/50">
                    <div className="transform group-hover:translate-x-4 group-hover:scale-105 transition-all duration-500 origin-left">
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-sm font-semibold mb-4 group-hover:shadow-lg group-hover:shadow-current/50 transition-all duration-500 transform group-hover:scale-110`}>{project.metrics}</div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-500 transform group-hover:scale-105 origin-left">{project.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span key={tag} className="px-3 py-1 bg-slate-700/50 text-xs rounded-lg text-slate-200 hover:bg-slate-600/80 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20" style={{ transitionDelay: `${i * 50}ms` }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4 mt-6 transform group-hover:translate-y-1 transition-transform duration-500">
                      <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold group-hover:gap-4 duration-300 hover:scale-110">
                        View Code <ExternalLink size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${project.color} rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl group-hover:animate-pulse`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: `linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5))`,
                  maskImage: 'linear-gradient(90deg, black 2px, transparent 2px), linear-gradient(180deg, black 2px, transparent 2px)',
                  maskSize: '100% 100%, 100% 100%',
                  pointerEvents: 'none'
                }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center">Technical Skills</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredSkill(idx)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-125 hover:rotate-3 hover:shadow-2xl hover:shadow-purple-500/50 cursor-pointer group hover:-translate-y-8 origin-bottom"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <h3 className="text-xl font-bold mb-6 text-purple-400 group-hover:text-purple-300 transform group-hover:translate-y-2 transition-all duration-500 relative z-10">{skill.category}</h3>
                <div className="space-y-3 relative z-10">
                  {skill.items.map((item, i) => (
                    <div 
                      key={item} 
                      className="flex items-center gap-3 transform group-hover:translate-x-2 transition-all duration-500"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                      <span className="text-slate-300 group-hover:text-slate-100 transition-colors duration-500">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 inline-block w-full">
            <div className="bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20 rounded-2xl p-8 border-2 border-green-400/50 hover:border-green-400 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl animate-pulse">✨</span>
                <h3 className="text-2xl font-bold text-green-300">Open for Freelance Projects</h3>
                <span className="text-3xl animate-pulse">✨</span>
              </div>
              <p className="text-lg text-emerald-200">I'm actively accepting freelance work in Data Science, Machine Learning, and Analytics. Let's build something amazing together!</p>
            </div>
          </div>

          <h2 className="text-5xl font-bold mb-6 hover:text-blue-400 transition-colors duration-300">Let's Collaborate</h2>
          <p className="text-xl text-slate-300 mb-12">Ready to discuss your next data science project or need insights from your data?</p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-125 hover:-translate-y-4 active:scale-95">Send Email</button>
            <button className="px-8 py-4 border border-slate-400 rounded-lg font-semibold hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-125 hover:-translate-y-4 active:scale-95">Schedule Call</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-700/50 py-8 px-6 text-center text-slate-400 z-10">
        <p>© 2025 Bhuvana Sai Puchakayala - Data Science Portfolio. Built with passion for data.</p>
      </footer>
    </div>
  );
}